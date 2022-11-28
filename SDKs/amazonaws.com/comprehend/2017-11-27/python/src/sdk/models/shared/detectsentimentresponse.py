from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DetectSentimentResponse:
    sentiment: Optional[SentimentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sentiment') }})
    sentiment_score: Optional[SentimentScore] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SentimentScore') }})
    
