from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import sentimenttype_enum
from . import sentimentscore


@dataclass_json
@dataclass
class DetectSentimentResponse:
    sentiment: Optional[sentimenttype_enum.SentimentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sentiment' }})
    sentiment_score: Optional[sentimentscore.SentimentScore] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SentimentScore' }})
    
