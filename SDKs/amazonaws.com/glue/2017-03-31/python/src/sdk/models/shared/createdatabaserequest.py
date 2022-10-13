from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import databaseinput


@dataclass_json
@dataclass
class CreateDatabaseRequest:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    database_input: databaseinput.DatabaseInput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseInput' }})
    
