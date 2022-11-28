from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IssueDetected:
    r"""IssueDetected
    Potential issues that are detected based on an artificial intelligence analysis of each turn in the conversation.
    """
    
    character_offsets: CharacterOffsets = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CharacterOffsets') }})
    
