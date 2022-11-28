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
class AssessmentRunNotification:
    r"""AssessmentRunNotification
    Used as one of the elements of the <a>AssessmentRun</a> data type.
    """
    
    date_: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    event: InspectorEventEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    sns_publish_status_code: Optional[AssessmentRunNotificationSnsStatusCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snsPublishStatusCode') }})
    sns_topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snsTopicArn') }})
    
