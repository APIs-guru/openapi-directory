from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import explicitdeny
from . import implicitdeny


@dataclass_json
@dataclass
class Denied:
    explicit_deny: Optional[explicitdeny.ExplicitDeny] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explicitDeny' }})
    implicit_deny: Optional[implicitdeny.ImplicitDeny] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'implicitDeny' }})
    
