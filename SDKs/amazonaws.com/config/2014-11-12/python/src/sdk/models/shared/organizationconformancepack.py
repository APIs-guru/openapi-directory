from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrganizationConformancePack:
    r"""OrganizationConformancePack
    An organization conformance pack that has information about conformance packs that Config creates in member accounts. 
    """
    
    last_update_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    organization_conformance_pack_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationConformancePackArn') }})
    organization_conformance_pack_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationConformancePackName') }})
    conformance_pack_input_parameters: Optional[List[ConformancePackInputParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackInputParameters') }})
    delivery_s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryS3Bucket') }})
    delivery_s3_key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryS3KeyPrefix') }})
    excluded_accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExcludedAccounts') }})
    
