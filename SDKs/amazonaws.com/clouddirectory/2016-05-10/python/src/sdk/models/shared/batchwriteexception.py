from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import batchwriteexceptiontype_enum


@dataclass_json
@dataclass
class BatchWriteException:
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Index' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    type: Optional[batchwriteexceptiontype_enum.BatchWriteExceptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
