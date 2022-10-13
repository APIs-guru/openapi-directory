from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import repositorytriggereventenum_enum


@dataclass_json
@dataclass
class RepositoryTrigger:
    branches: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branches' }})
    custom_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customData' }})
    destination_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationArn' }})
    events: List[repositorytriggereventenum_enum.RepositoryTriggerEventEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
