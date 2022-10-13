from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import datasetactiontype_enum


@dataclass_json
@dataclass
class DatasetActionSummary:
    action_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionName' }})
    action_type: Optional[datasetactiontype_enum.DatasetActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionType' }})
    
