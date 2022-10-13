from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import allowed
from . import authdecision_enum
from . import authinfo
from . import denied


@dataclass_json
@dataclass
class AuthResult:
    allowed: Optional[allowed.Allowed] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowed' }})
    auth_decision: Optional[authdecision_enum.AuthDecisionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authDecision' }})
    auth_info: Optional[authinfo.AuthInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authInfo' }})
    denied: Optional[denied.Denied] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'denied' }})
    missing_context_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'missingContextValues' }})
    
