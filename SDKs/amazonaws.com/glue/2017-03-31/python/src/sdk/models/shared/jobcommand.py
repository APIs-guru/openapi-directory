from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class JobCommand:
    r"""JobCommand
    Specifies code that runs when a job is run.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    python_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PythonVersion') }})
    script_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScriptLocation') }})
    
