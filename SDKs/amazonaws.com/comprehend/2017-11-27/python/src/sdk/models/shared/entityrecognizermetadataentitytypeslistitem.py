from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import entitytypesevaluationmetrics


@dataclass_json
@dataclass
class EntityRecognizerMetadataEntityTypesListItem:
    evaluation_metrics: Optional[entitytypesevaluationmetrics.EntityTypesEvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EvaluationMetrics' }})
    number_of_train_mentions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfTrainMentions' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
