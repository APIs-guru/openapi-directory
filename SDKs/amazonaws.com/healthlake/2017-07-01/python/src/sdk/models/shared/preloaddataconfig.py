from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import preloaddatatype_enum


@dataclass_json
@dataclass
class PreloadDataConfig:
    preload_data_type: preloaddatatype_enum.PreloadDataTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreloadDataType' }})
    
