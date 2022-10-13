from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import batchreadexceptiontype_enum


@dataclass_json
@dataclass
class BatchReadException:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    type: Optional[batchreadexceptiontype_enum.BatchReadExceptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
