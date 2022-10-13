from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import stagestate


@dataclass_json
@dataclass
class GetPipelineStateOutput:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pipeline_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineName' }})
    pipeline_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineVersion' }})
    stage_states: Optional[List[stagestate.StageState]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stageStates' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
