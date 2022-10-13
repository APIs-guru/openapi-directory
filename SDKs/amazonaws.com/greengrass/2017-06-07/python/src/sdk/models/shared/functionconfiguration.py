from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import encodingtype_enum
from . import functionconfigurationenvironment


@dataclass_json
@dataclass
class FunctionConfiguration:
    encoding_type: Optional[encodingtype_enum.EncodingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncodingType' }})
    environment: Optional[functionconfigurationenvironment.FunctionConfigurationEnvironment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Environment' }})
    exec_args: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecArgs' }})
    executable: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Executable' }})
    memory_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MemorySize' }})
    pinned: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Pinned' }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timeout' }})
    
