from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tableinput


@dataclass_json
@dataclass
class UpdateTableRequest:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    skip_archive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SkipArchive' }})
    table_input: tableinput.TableInput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableInput' }})
    
