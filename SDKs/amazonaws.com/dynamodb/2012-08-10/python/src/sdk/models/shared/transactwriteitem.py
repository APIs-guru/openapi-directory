from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import conditioncheck
from . import delete
from . import put
from . import update


@dataclass_json
@dataclass
class TransactWriteItem:
    condition_check: Optional[conditioncheck.ConditionCheck] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConditionCheck' }})
    delete: Optional[delete.Delete] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Delete' }})
    put: Optional[put.Put] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Put' }})
    update: Optional[update.Update] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Update' }})
    
