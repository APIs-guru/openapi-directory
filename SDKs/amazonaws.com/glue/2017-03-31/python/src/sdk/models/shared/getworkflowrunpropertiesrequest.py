from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetWorkflowRunPropertiesRequest:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    run_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunId') }})
    
