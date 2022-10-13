from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DatasetEntry:
    data_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataURI' }})
    entry_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryName' }})
    
