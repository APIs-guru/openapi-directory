from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userstackassociationerror


@dataclass_json
@dataclass
class BatchAssociateUserStackResult:
    errors: Optional[List[userstackassociationerror.UserStackAssociationError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
