from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import validatepolicyfindingtype_enum
from . import location


@dataclass_json
@dataclass
class ValidatePolicyFinding:
    finding_details: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findingDetails' }})
    finding_type: validatepolicyfindingtype_enum.ValidatePolicyFindingTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findingType' }})
    issue_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issueCode' }})
    learn_more_link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'learnMoreLink' }})
    locations: List[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locations' }})
    
