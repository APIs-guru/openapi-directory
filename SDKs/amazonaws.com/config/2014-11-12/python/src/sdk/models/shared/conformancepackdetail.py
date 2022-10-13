from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import conformancepackinputparameter


@dataclass_json
@dataclass
class ConformancePackDetail:
    conformance_pack_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConformancePackArn' }})
    conformance_pack_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConformancePackId' }})
    conformance_pack_input_parameters: Optional[List[conformancepackinputparameter.ConformancePackInputParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConformancePackInputParameters' }})
    conformance_pack_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConformancePackName' }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBy' }})
    delivery_s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryS3Bucket' }})
    delivery_s3_key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryS3KeyPrefix' }})
    last_update_requested_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdateRequestedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
