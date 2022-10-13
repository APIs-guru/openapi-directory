from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import parametervalue


@dataclass_json
@dataclass
class ActivatePipelineInput:
    parameter_values: Optional[List[parametervalue.ParameterValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameterValues' }})
    pipeline_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineId' }})
    start_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
