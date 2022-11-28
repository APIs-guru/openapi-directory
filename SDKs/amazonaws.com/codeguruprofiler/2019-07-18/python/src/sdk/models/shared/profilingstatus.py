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
class ProfilingStatus:
    r"""ProfilingStatus
     Profiling status includes information about the last time a profile agent pinged back, the last time a profile was received, and the aggregation period and start time for the most recent aggregated profile. 
    """
    
    latest_agent_orchestrated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestAgentOrchestratedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_agent_profile_reported_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestAgentProfileReportedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_aggregated_profile: Optional[AggregatedProfileTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestAggregatedProfile') }})
    
