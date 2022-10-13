from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DetectMitigationActionsTaskTarget:
    behavior_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'behaviorName' }})
    security_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityProfileName' }})
    violation_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'violationIds' }})
    
