from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import sourcecodeversiontype_enum


@dataclass_json
@dataclass
class SourceCodeVersion:
    type: sourcecodeversiontype_enum.SourceCodeVersionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
