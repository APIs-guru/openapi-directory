from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import experimenttemplateaction
from . import experimenttemplatestopcondition
from . import experimenttemplatetarget


@dataclass_json
@dataclass
class ExperimentTemplate:
    actions: Optional[dict[str, experimenttemplateaction.ExperimentTemplateAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    stop_conditions: Optional[List[experimenttemplatestopcondition.ExperimentTemplateStopCondition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopConditions' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    targets: Optional[dict[str, experimenttemplatetarget.ExperimentTemplateTarget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    
