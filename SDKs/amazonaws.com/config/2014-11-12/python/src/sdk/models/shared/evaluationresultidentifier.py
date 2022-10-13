from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import evaluationresultqualifier


@dataclass_json
@dataclass
class EvaluationResultIdentifier:
    evaluation_result_qualifier: Optional[evaluationresultqualifier.EvaluationResultQualifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EvaluationResultQualifier' }})
    ordering_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrderingTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
