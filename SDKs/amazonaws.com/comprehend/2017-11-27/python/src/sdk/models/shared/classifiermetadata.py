from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClassifierMetadata:
    r"""ClassifierMetadata
    Provides information about a document classifier.
    """
    
    evaluation_metrics: Optional[ClassifierEvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationMetrics') }})
    number_of_labels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfLabels') }})
    number_of_test_documents: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfTestDocuments') }})
    number_of_trained_documents: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfTrainedDocuments') }})
    
