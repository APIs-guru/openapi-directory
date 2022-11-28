from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartNotebookExecutionInput:
    editor_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EditorId') }})
    execution_engine: ExecutionEngineConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionEngine') }})
    relative_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelativePath') }})
    service_role: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceRole') }})
    notebook_execution_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotebookExecutionName') }})
    notebook_instance_security_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotebookInstanceSecurityGroupId') }})
    notebook_params: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotebookParams') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
