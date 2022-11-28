from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Code:
    r"""Code
    Location and destination information about the source code files provided with the project request. The source code is uploaded to the new project source repository after project creation.
    """
    
    destination: CodeDestination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    source: CodeSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
