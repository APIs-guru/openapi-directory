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
class ReportDefinition:
    r"""ReportDefinition
    The configuration of a report in AWS Application Cost Profiler.
    """
    
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    destination_s3_location: Optional[S3Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationS3Location') }})
    format: Optional[FormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    report_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportDescription') }})
    report_frequency: Optional[ReportFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportFrequency') }})
    report_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportId') }})
    
