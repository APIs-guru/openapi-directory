from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FindingsReportSummary:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    profile_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    profile_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    profiling_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profilingGroupName' }})
    total_number_of_findings: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalNumberOfFindings' }})
    
