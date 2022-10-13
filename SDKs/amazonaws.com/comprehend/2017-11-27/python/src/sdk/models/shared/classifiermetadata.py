from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import classifierevaluationmetrics


@dataclass_json
@dataclass
class ClassifierMetadata:
    evaluation_metrics: Optional[classifierevaluationmetrics.ClassifierEvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EvaluationMetrics' }})
    number_of_labels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfLabels' }})
    number_of_test_documents: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfTestDocuments' }})
    number_of_trained_documents: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfTrainedDocuments' }})
    
