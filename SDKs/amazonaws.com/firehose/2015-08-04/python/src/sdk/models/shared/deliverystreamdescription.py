from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeliveryStreamDescription:
    r"""DeliveryStreamDescription
    Contains information about a delivery stream.
    """
    
    delivery_stream_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamARN') }})
    delivery_stream_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamName') }})
    delivery_stream_status: DeliveryStreamStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamStatus') }})
    delivery_stream_type: DeliveryStreamTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamType') }})
    destinations: List[DestinationDescription] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destinations') }})
    has_more_destinations: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasMoreDestinations') }})
    version_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VersionId') }})
    create_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    delivery_stream_encryption_configuration: Optional[DeliveryStreamEncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamEncryptionConfiguration') }})
    failure_description: Optional[FailureDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureDescription') }})
    last_update_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    source: Optional[SourceDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Source') }})
    
