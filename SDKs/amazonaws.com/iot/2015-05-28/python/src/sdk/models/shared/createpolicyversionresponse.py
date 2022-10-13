from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreatePolicyVersionResponse:
    is_default_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDefaultVersion' }})
    policy_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyArn' }})
    policy_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyDocument' }})
    policy_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyVersionId' }})
    
