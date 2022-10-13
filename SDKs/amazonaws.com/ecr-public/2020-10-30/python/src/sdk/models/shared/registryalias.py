from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import registryaliasstatus_enum


@dataclass_json
@dataclass
class RegistryAlias:
    default_registry_alias: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultRegistryAlias' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    primary_registry_alias: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryRegistryAlias' }})
    status: registryaliasstatus_enum.RegistryAliasStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
