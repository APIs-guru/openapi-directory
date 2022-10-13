from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import createglobalsecondaryindexaction
from . import deleteglobalsecondaryindexaction
from . import updateglobalsecondaryindexaction


@dataclass_json
@dataclass
class GlobalSecondaryIndexUpdate:
    create: Optional[createglobalsecondaryindexaction.CreateGlobalSecondaryIndexAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Create' }})
    delete: Optional[deleteglobalsecondaryindexaction.DeleteGlobalSecondaryIndexAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Delete' }})
    update: Optional[updateglobalsecondaryindexaction.UpdateGlobalSecondaryIndexAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Update' }})
    
