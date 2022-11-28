from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetReportDefinitionResult:
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    destination_s3_location: S3Location = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationS3Location') }})
    format: FormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    last_updated: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    report_description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportDescription') }})
    report_frequency: ReportFrequencyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportFrequency') }})
    report_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportId') }})
    
