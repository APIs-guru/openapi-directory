from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CharacterOffsets:
    r"""CharacterOffsets
    For characters that were detected as issues, where they occur in the transcript.
    """
    
    begin_offset_char: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BeginOffsetChar') }})
    end_offset_char: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndOffsetChar') }})
    
