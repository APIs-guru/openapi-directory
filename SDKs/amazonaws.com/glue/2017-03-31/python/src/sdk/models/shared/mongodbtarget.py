from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MongoDbTarget:
    connection_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionName' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Path' }})
    scan_all: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScanAll' }})
    
