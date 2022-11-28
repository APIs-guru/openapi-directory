from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Denied:
    r"""Denied
    Contains information that denied the authorization.
    """
    
    explicit_deny: Optional[ExplicitDeny] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explicitDeny') }})
    implicit_deny: Optional[ImplicitDeny] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('implicitDeny') }})
    
