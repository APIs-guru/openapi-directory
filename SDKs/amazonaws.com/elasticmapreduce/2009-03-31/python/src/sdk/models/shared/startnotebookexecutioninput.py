from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import executionengineconfig
from . import tag


@dataclass_json
@dataclass
class StartNotebookExecutionInput:
    editor_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EditorId' }})
    execution_engine: executionengineconfig.ExecutionEngineConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionEngine' }})
    notebook_execution_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookExecutionName' }})
    notebook_instance_security_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookInstanceSecurityGroupId' }})
    notebook_params: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookParams' }})
    relative_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RelativePath' }})
    service_role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceRole' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
