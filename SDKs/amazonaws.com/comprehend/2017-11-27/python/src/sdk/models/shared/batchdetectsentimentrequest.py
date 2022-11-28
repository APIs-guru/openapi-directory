from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchDetectSentimentRequest:
    language_code: LanguageCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    text_list: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextList') }})
    
