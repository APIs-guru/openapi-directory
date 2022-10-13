from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import triggeringdataset
from . import schedule


@dataclass_json
@dataclass
class DatasetTrigger:
    dataset: Optional[triggeringdataset.TriggeringDataset] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataset' }})
    schedule: Optional[schedule.Schedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    
