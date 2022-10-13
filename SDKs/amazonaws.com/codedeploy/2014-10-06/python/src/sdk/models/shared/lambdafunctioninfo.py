from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LambdaFunctionInfo:
    current_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentVersion' }})
    function_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functionAlias' }})
    function_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functionName' }})
    target_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetVersion' }})
    target_version_weight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetVersionWeight' }})
    
