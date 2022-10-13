from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import batchstatementerrorcodeenum_enum


@dataclass_json
@dataclass
class BatchStatementError:
    code: Optional[batchstatementerrorcodeenum_enum.BatchStatementErrorCodeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    
