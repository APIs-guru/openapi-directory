from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deletebehavior_enum
from . import updatebehavior_enum


@dataclass_json
@dataclass
class SchemaChangePolicy:
    delete_behavior: Optional[deletebehavior_enum.DeleteBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeleteBehavior' }})
    update_behavior: Optional[updatebehavior_enum.UpdateBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateBehavior' }})
    
