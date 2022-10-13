from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import filterrule
from . import filterrule
from . import options


@dataclass_json
@dataclass
class StartTaskExecutionRequest:
    excludes: Optional[List[filterrule.FilterRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Excludes' }})
    includes: Optional[List[filterrule.FilterRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Includes' }})
    override_options: Optional[options.Options] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverrideOptions' }})
    task_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskArn' }})
    
