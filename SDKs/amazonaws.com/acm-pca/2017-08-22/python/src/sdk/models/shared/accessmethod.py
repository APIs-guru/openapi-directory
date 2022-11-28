from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccessMethod:
    r"""AccessMethod
    Describes the type and format of extension access. Only one of <code>CustomObjectIdentifier</code> or <code>AccessMethodType</code> may be provided. Providing both results in <code>InvalidArgsException</code>.
    """
    
    access_method_type: Optional[AccessMethodTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessMethodType') }})
    custom_object_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomObjectIdentifier') }})
    
