from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TaskRunProperties:
    r"""TaskRunProperties
    The configuration properties for the task run.
    """
    
    export_labels_task_run_properties: Optional[ExportLabelsTaskRunProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExportLabelsTaskRunProperties') }})
    find_matches_task_run_properties: Optional[FindMatchesTaskRunProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FindMatchesTaskRunProperties') }})
    import_labels_task_run_properties: Optional[ImportLabelsTaskRunProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportLabelsTaskRunProperties') }})
    labeling_set_generation_task_run_properties: Optional[LabelingSetGenerationTaskRunProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelingSetGenerationTaskRunProperties') }})
    task_type: Optional[TaskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskType') }})
    
