from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Task:
    r"""Task
     A class for modeling different type of tasks. Task implementation varies based on the <code>TaskType</code>. 
    """
    
    source_fields: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceFields') }})
    task_type: TaskTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskType') }})
    connector_operator: Optional[ConnectorOperator] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorOperator') }})
    destination_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationField') }})
    task_properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskProperties') }})
    
