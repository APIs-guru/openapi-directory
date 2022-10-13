from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import experimentaction
from . import experimentstate
from . import experimentstopcondition
from . import experimenttarget


@dataclass_json
@dataclass
class Experiment:
    actions: Optional[dict[str, experimentaction.ExperimentAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    experiment_template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'experimentTemplateId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[experimentstate.ExperimentState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    stop_conditions: Optional[List[experimentstopcondition.ExperimentStopCondition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopConditions' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    targets: Optional[dict[str, experimenttarget.ExperimentTarget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    
