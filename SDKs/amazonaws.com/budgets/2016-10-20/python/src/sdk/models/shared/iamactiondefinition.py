from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IamActionDefinition:
    r"""IamActionDefinition
     The AWS Identity and Access Management (IAM) action definition details. 
    """
    
    policy_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyArn') }})
    groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Groups') }})
    roles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Roles') }})
    users: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Users') }})
    
