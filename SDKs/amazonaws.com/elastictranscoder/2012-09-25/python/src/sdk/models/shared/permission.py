from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Permission:
    r"""Permission
    The <code>Permission</code> structure.
    """
    
    access: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Access') }})
    grantee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Grantee') }})
    grantee_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GranteeType') }})
    
