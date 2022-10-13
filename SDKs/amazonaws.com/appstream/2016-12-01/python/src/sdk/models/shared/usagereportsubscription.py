from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import usagereportschedule_enum
from . import lastreportgenerationexecutionerror


@dataclass_json
@dataclass
class UsageReportSubscription:
    last_generated_report_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastGeneratedReportDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    s3_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BucketName' }})
    schedule: Optional[usagereportschedule_enum.UsageReportScheduleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schedule' }})
    subscription_errors: Optional[List[lastreportgenerationexecutionerror.LastReportGenerationExecutionError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubscriptionErrors' }})
    
