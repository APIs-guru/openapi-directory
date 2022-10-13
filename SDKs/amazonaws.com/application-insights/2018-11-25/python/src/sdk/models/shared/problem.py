from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import feedbackvalue_enum
from . import severitylevel_enum
from . import status_enum


@dataclass_json
@dataclass
class Problem:
    affected_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AffectedResource' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    feedback: Optional[dict[str, feedbackvalue_enum.FeedbackValueEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Feedback' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    insights: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Insights' }})
    resource_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceGroupName' }})
    severity_level: Optional[severitylevel_enum.SeverityLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SeverityLevel' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[status_enum.StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    
