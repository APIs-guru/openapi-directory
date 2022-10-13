from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import blockertype_enum


@dataclass_json
@dataclass
class BlockerDeclaration:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: blockertype_enum.BlockerTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
