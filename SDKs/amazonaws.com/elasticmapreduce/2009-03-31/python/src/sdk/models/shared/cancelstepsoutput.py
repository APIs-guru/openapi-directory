from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cancelstepsinfo


@dataclass_json
@dataclass
class CancelStepsOutput:
    cancel_steps_info_list: Optional[List[cancelstepsinfo.CancelStepsInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CancelStepsInfoList' }})
    
