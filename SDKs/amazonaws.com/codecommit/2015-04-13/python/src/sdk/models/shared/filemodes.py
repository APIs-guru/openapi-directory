from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import filemodetypeenum_enum
from . import filemodetypeenum_enum
from . import filemodetypeenum_enum


@dataclass_json
@dataclass
class FileModes:
    base: Optional[filemodetypeenum_enum.FileModeTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base' }})
    destination: Optional[filemodetypeenum_enum.FileModeTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    source: Optional[filemodetypeenum_enum.FileModeTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
