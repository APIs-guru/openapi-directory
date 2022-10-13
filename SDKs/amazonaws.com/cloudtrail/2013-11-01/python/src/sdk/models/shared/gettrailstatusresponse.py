from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetTrailStatusResponse:
    is_logging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsLogging' }})
    latest_cloud_watch_logs_delivery_error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestCloudWatchLogsDeliveryError' }})
    latest_cloud_watch_logs_delivery_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestCloudWatchLogsDeliveryTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_delivery_attempt_succeeded: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestDeliveryAttemptSucceeded' }})
    latest_delivery_attempt_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestDeliveryAttemptTime' }})
    latest_delivery_error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestDeliveryError' }})
    latest_delivery_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestDeliveryTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_digest_delivery_error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestDigestDeliveryError' }})
    latest_digest_delivery_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestDigestDeliveryTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_notification_attempt_succeeded: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestNotificationAttemptSucceeded' }})
    latest_notification_attempt_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestNotificationAttemptTime' }})
    latest_notification_error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestNotificationError' }})
    latest_notification_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestNotificationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_logging_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartLoggingTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    stop_logging_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StopLoggingTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    time_logging_started: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeLoggingStarted' }})
    time_logging_stopped: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeLoggingStopped' }})
    
