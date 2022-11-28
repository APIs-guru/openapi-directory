from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EntityRecognizerMetadataEntityTypesListItem:
    r"""EntityRecognizerMetadataEntityTypesListItem
    Individual item from the list of entity types in the metadata of an entity recognizer.
    """
    
    evaluation_metrics: Optional[EntityTypesEvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationMetrics') }})
    number_of_train_mentions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfTrainMentions') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
