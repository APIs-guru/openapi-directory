from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProfilingGroupDescription:
    r"""ProfilingGroupDescription
     Contains information about a profiling group. 
    """
    
    agent_orchestration_config: Optional[AgentOrchestrationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentOrchestrationConfig') }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    compute_platform: Optional[ComputePlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computePlatform') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    profiling_status: Optional[ProfilingStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profilingStatus') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
