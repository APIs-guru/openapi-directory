from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import userstackassociation


@dataclass_json
@dataclass
class BatchAssociateUserStackRequest:
    user_stack_associations: List[userstackassociation.UserStackAssociation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserStackAssociations' }})
    
