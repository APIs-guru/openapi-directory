from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserStackAssociationError:
    r"""UserStackAssociationError
    Describes the error that is returned when a user can’t be associated with or disassociated from a stack. 
    """
    
    error_code: Optional[UserStackAssociationErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorCode') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMessage') }})
    user_stack_association: Optional[UserStackAssociation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserStackAssociation') }})
    
