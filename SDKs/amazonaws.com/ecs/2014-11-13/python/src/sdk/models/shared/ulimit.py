from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import ulimitname_enum


@dataclass_json
@dataclass
class Ulimit:
    hard_limit: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hardLimit' }})
    name: ulimitname_enum.UlimitNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    soft_limit: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'softLimit' }})
    
