from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribePiiEntitiesDetectionJobResponse:
    pii_entities_detection_job_properties: Optional[PiiEntitiesDetectionJobProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PiiEntitiesDetectionJobProperties') }})
    
