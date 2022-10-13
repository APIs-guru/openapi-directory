from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tabledescription


@dataclass_json
@dataclass
class CreateTableOutput:
    table_description: Optional[tabledescription.TableDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableDescription' }})
    
