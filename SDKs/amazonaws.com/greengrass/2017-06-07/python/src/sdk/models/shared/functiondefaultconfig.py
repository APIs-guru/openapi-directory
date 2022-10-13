from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import functiondefaultexecutionconfig


@dataclass_json
@dataclass
class FunctionDefaultConfig:
    execution: Optional[functiondefaultexecutionconfig.FunctionDefaultExecutionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Execution' }})
    
