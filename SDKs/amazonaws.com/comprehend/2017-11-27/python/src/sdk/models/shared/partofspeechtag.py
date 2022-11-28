from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PartOfSpeechTag:
    r"""PartOfSpeechTag
    Identifies the part of speech represented by the token and gives the confidence that Amazon Comprehend has that the part of speech was correctly identified. For more information about the parts of speech that Amazon Comprehend can identify, see <a>how-syntax</a>.
    """
    
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Score') }})
    tag: Optional[PartOfSpeechTagTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tag') }})
    
