from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import registryalias


@dataclass_json
@dataclass
class Registry:
    aliases: List[registryalias.RegistryAlias] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aliases' }})
    registry_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registryArn' }})
    registry_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registryId' }})
    registry_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registryUri' }})
    verified: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verified' }})
    
