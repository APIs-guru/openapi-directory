from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EvaluationResultIdentifier:
    r"""EvaluationResultIdentifier
    Uniquely identifies an evaluation result.
    """
    
    evaluation_result_qualifier: Optional[EvaluationResultQualifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationResultQualifier') }})
    ordering_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrderingTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
