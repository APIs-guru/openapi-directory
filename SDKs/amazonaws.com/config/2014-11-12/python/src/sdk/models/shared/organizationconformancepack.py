from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import conformancepackinputparameter


@dataclass_json
@dataclass
class OrganizationConformancePack:
    conformance_pack_input_parameters: Optional[List[conformancepackinputparameter.ConformancePackInputParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConformancePackInputParameters' }})
    delivery_s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryS3Bucket' }})
    delivery_s3_key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryS3KeyPrefix' }})
    excluded_accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExcludedAccounts' }})
    last_update_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    organization_conformance_pack_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationConformancePackArn' }})
    organization_conformance_pack_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationConformancePackName' }})
    
