from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import experimentstate


@dataclass_json
@dataclass
class ExperimentSummary:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    experiment_template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'experimentTemplateId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    state: Optional[experimentstate.ExperimentState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
