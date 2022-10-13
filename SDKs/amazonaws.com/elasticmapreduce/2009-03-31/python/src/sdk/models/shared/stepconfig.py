from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import actiononfailure_enum
from . import hadoopjarstepconfig


@dataclass_json
@dataclass
class StepConfig:
    action_on_failure: Optional[actiononfailure_enum.ActionOnFailureEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionOnFailure' }})
    hadoop_jar_step: hadoopjarstepconfig.HadoopJarStepConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HadoopJarStep' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
