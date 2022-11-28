from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReportTaskProgressOutput:
    r"""ReportTaskProgressOutput
    Contains the output of ReportTaskProgress.
    """
    
    canceled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('canceled') }})
    
