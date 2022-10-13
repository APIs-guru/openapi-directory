from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateNumberOfDomainControllersRequest:
    desired_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DesiredNumber' }})
    directory_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    
