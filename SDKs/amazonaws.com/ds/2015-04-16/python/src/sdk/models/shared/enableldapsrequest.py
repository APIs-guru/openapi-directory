from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import ldapstype_enum


@dataclass_json
@dataclass
class EnableLdapsRequest:
    directory_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    type: ldapstype_enum.LdapsTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
