from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import exportlabelstaskrunproperties
from . import findmatchestaskrunproperties
from . import importlabelstaskrunproperties
from . import labelingsetgenerationtaskrunproperties
from . import tasktype_enum


@dataclass_json
@dataclass
class TaskRunProperties:
    export_labels_task_run_properties: Optional[exportlabelstaskrunproperties.ExportLabelsTaskRunProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExportLabelsTaskRunProperties' }})
    find_matches_task_run_properties: Optional[findmatchestaskrunproperties.FindMatchesTaskRunProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FindMatchesTaskRunProperties' }})
    import_labels_task_run_properties: Optional[importlabelstaskrunproperties.ImportLabelsTaskRunProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImportLabelsTaskRunProperties' }})
    labeling_set_generation_task_run_properties: Optional[labelingsetgenerationtaskrunproperties.LabelingSetGenerationTaskRunProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelingSetGenerationTaskRunProperties' }})
    task_type: Optional[tasktype_enum.TaskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskType' }})
    
