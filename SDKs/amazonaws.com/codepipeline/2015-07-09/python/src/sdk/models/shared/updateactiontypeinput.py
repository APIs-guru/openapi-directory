from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import actiontypedeclaration


@dataclass_json
@dataclass
class UpdateActionTypeInput:
    action_type: actiontypedeclaration.ActionTypeDeclaration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionType' }})
    
