from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum
from dataclasses_json import dataclass_json
from . import s3location
from . import format_enum
from . import reportfrequency_enum


@dataclass_json
@dataclass
class GetReportDefinitionResult:
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    destination_s3_location: s3location.S3Location = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationS3Location' }})
    format: format_enum.FormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    last_updated: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    report_description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportDescription' }})
    report_frequency: reportfrequency_enum.ReportFrequencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportFrequency' }})
    report_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportId' }})
    
