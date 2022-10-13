from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DatastoreActivity:
    datastore_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datastoreName' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
