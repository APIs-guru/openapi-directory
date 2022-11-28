from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EntityRecognizerMetadata:
    r"""EntityRecognizerMetadata
    Detailed information about an entity recognizer.
    """
    
    entity_types: Optional[List[EntityRecognizerMetadataEntityTypesListItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntityTypes') }})
    evaluation_metrics: Optional[EntityRecognizerEvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationMetrics') }})
    number_of_test_documents: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfTestDocuments') }})
    number_of_trained_documents: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfTrainedDocuments') }})
    
