from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import retrybuildbatchtype_enum


@dataclass_json
@dataclass
class RetryBuildBatchInput:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    retry_type: Optional[retrybuildbatchtype_enum.RetryBuildBatchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retryType' }})
    
