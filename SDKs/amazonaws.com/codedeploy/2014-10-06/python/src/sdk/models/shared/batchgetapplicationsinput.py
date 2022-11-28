from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BatchGetApplicationsInput:
    r"""BatchGetApplicationsInput
    Represents the input of a <code>BatchGetApplications</code> operation.
    """
    
    application_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationNames') }})
    
