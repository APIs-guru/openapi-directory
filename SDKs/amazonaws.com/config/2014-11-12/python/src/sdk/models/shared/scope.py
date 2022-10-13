from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Scope:
    compliance_resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceResourceId' }})
    compliance_resource_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceResourceTypes' }})
    tag_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagKey' }})
    tag_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagValue' }})
    
