from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutOrganizationConformancePackRequest:
    organization_conformance_pack_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationConformancePackName') }})
    conformance_pack_input_parameters: Optional[List[ConformancePackInputParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackInputParameters') }})
    delivery_s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryS3Bucket') }})
    delivery_s3_key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryS3KeyPrefix') }})
    excluded_accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExcludedAccounts') }})
    template_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateBody') }})
    template_s3_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateS3Uri') }})
    
