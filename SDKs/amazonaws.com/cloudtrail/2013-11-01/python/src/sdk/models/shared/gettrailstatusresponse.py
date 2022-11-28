from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetTrailStatusResponse:
    r"""GetTrailStatusResponse
    Returns the objects or data listed below if successful. Otherwise, returns an error.
    """
    
    is_logging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsLogging') }})
    latest_cloud_watch_logs_delivery_error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestCloudWatchLogsDeliveryError') }})
    latest_cloud_watch_logs_delivery_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestCloudWatchLogsDeliveryTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_delivery_attempt_succeeded: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestDeliveryAttemptSucceeded') }})
    latest_delivery_attempt_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestDeliveryAttemptTime') }})
    latest_delivery_error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestDeliveryError') }})
    latest_delivery_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestDeliveryTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_digest_delivery_error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestDigestDeliveryError') }})
    latest_digest_delivery_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestDigestDeliveryTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_notification_attempt_succeeded: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestNotificationAttemptSucceeded') }})
    latest_notification_attempt_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestNotificationAttemptTime') }})
    latest_notification_error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestNotificationError') }})
    latest_notification_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestNotificationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_logging_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartLoggingTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    stop_logging_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StopLoggingTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    time_logging_started: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeLoggingStarted') }})
    time_logging_stopped: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeLoggingStopped') }})
    
