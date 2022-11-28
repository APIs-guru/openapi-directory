from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OutputFileURIValue:
    r"""OutputFileURIValue
    The value of the variable as a structure that specifies an output file URI.
    """
    
    file_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileName') }})
    
