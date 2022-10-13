from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag
from . import resourceviolation


@dataclass_json
@dataclass
class ViolationDetail:
    member_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MemberAccount' }})
    policy_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyId' }})
    resource_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceDescription' }})
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    resource_tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceTags' }})
    resource_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    resource_violations: List[resourceviolation.ResourceViolation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceViolations' }})
    
