from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import deliverystreamencryptionconfiguration
from . import deliverystreamstatus_enum
from . import deliverystreamtype_enum
from . import destinationdescription
from . import failuredescription
from . import sourcedescription


@dataclass_json
@dataclass
class DeliveryStreamDescription:
    create_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    delivery_stream_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryStreamARN' }})
    delivery_stream_encryption_configuration: Optional[deliverystreamencryptionconfiguration.DeliveryStreamEncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryStreamEncryptionConfiguration' }})
    delivery_stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryStreamName' }})
    delivery_stream_status: deliverystreamstatus_enum.DeliveryStreamStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryStreamStatus' }})
    delivery_stream_type: deliverystreamtype_enum.DeliveryStreamTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryStreamType' }})
    destinations: List[destinationdescription.DestinationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Destinations' }})
    failure_description: Optional[failuredescription.FailureDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureDescription' }})
    has_more_destinations: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasMoreDestinations' }})
    last_update_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdateTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    source: Optional[sourcedescription.SourceDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    version_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VersionId' }})
    
