from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import userstackassociationerrorcode_enum
from . import userstackassociation


@dataclass_json
@dataclass
class UserStackAssociationError:
    error_code: Optional[userstackassociationerrorcode_enum.UserStackAssociationErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    user_stack_association: Optional[userstackassociation.UserStackAssociation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserStackAssociation' }})
    
