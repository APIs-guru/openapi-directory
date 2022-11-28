from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BuildBatchPhase:
    r"""BuildBatchPhase
    Contains information about a stage for a batch build.
    """
    
    contexts: Optional[List[PhaseContext]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contexts') }})
    duration_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationInSeconds') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    phase_status: Optional[StatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phaseStatus') }})
    phase_type: Optional[BuildBatchPhaseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phaseType') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
