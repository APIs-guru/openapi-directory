from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import entityrecognizermetadataentitytypeslistitem
from . import entityrecognizerevaluationmetrics


@dataclass_json
@dataclass
class EntityRecognizerMetadata:
    entity_types: Optional[List[entityrecognizermetadataentitytypeslistitem.EntityRecognizerMetadataEntityTypesListItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntityTypes' }})
    evaluation_metrics: Optional[entityrecognizerevaluationmetrics.EntityRecognizerEvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EvaluationMetrics' }})
    number_of_test_documents: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfTestDocuments' }})
    number_of_trained_documents: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfTrainedDocuments' }})
    
