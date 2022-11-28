from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReactionValueFormats:
    r"""ReactionValueFormats
    Information about the values for reactions to a comment. AWS CodeCommit supports a limited set of reactions.
    """
    
    emoji: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emoji') }})
    short_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortCode') }})
    unicode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unicode') }})
    
