from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import aggregatedprofiletime


@dataclass_json
@dataclass
class ProfilingStatus:
    latest_agent_orchestrated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestAgentOrchestratedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_agent_profile_reported_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestAgentProfileReportedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_aggregated_profile: Optional[aggregatedprofiletime.AggregatedProfileTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestAggregatedProfile' }})
    
