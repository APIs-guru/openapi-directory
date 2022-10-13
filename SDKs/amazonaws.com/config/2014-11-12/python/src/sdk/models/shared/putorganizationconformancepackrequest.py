from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import conformancepackinputparameter


@dataclass_json
@dataclass
class PutOrganizationConformancePackRequest:
    conformance_pack_input_parameters: Optional[List[conformancepackinputparameter.ConformancePackInputParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConformancePackInputParameters' }})
    delivery_s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryS3Bucket' }})
    delivery_s3_key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryS3KeyPrefix' }})
    excluded_accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExcludedAccounts' }})
    organization_conformance_pack_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationConformancePackName' }})
    template_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateBody' }})
    template_s3_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateS3Uri' }})
    
