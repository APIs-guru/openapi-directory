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
class RecommendationExportJob:
    r"""RecommendationExportJob
    <p>Describes a recommendation export job.</p> <p>Use the <a>DescribeRecommendationExportJobs</a> action to view your recommendation export jobs.</p> <p>Use the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions to request an export of your recommendations.</p>
    """
    
    creation_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    destination: Optional[ExportDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    last_updated_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_type: Optional[ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    status: Optional[JobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
