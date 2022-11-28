from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UsageReportSubscription:
    r"""UsageReportSubscription
    Describes information about the usage report subscription.
    """
    
    last_generated_report_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastGeneratedReportDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    s3_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BucketName') }})
    schedule: Optional[UsageReportScheduleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    subscription_errors: Optional[List[LastReportGenerationExecutionError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscriptionErrors') }})
    
