from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SentimentScore:
    r"""SentimentScore
    Describes the level of confidence that Amazon Comprehend has in the accuracy of its detection of sentiments.
    """
    
    mixed: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mixed') }})
    negative: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Negative') }})
    neutral: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Neutral') }})
    positive: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Positive') }})
    
