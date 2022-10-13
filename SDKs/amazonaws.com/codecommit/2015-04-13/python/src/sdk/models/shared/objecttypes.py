from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import objecttypeenum_enum
from . import objecttypeenum_enum
from . import objecttypeenum_enum


@dataclass_json
@dataclass
class ObjectTypes:
    base: Optional[objecttypeenum_enum.ObjectTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base' }})
    destination: Optional[objecttypeenum_enum.ObjectTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    source: Optional[objecttypeenum_enum.ObjectTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
