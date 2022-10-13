from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import usagereportschedule_enum


@dataclass_json
@dataclass
class CreateUsageReportSubscriptionResult:
    s3_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BucketName' }})
    schedule: Optional[usagereportschedule_enum.UsageReportScheduleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schedule' }})
    
