from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import s3location
from . import format_enum
from . import reportfrequency_enum


@dataclass_json
@dataclass
class ReportDefinition:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    destination_s3_location: Optional[s3location.S3Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationS3Location' }})
    format: Optional[format_enum.FormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    report_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportDescription' }})
    report_frequency: Optional[reportfrequency_enum.ReportFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportFrequency' }})
    report_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportId' }})
    
