from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BatchGetBlueprintsRequest:
    names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Names') }})
    include_blueprint: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeBlueprint') }})
    include_parameter_spec: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeParameterSpec') }})
    
