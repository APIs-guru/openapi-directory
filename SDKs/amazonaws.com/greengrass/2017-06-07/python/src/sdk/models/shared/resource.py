from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import resourcedatacontainer


@dataclass_json
@dataclass
class Resource:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    resource_data_container: resourcedatacontainer.ResourceDataContainer = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceDataContainer' }})
    
