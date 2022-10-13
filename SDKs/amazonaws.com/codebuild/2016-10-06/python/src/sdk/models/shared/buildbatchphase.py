from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import phasecontext
from . import statustype_enum
from . import buildbatchphasetype_enum


@dataclass_json
@dataclass
class BuildBatchPhase:
    contexts: Optional[List[phasecontext.PhaseContext]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contexts' }})
    duration_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationInSeconds' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    phase_status: Optional[statustype_enum.StatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phaseStatus' }})
    phase_type: Optional[buildbatchphasetype_enum.BuildBatchPhaseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phaseType' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
