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
class Run:
    r"""Run
    Represents a test run on a set of devices with a given app package, test parameters, and so on.
    """
    
    app_upload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appUpload') }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    billing_method: Optional[BillingMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingMethod') }})
    completed_jobs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completedJobs') }})
    counters: Optional[Counters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counters') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    customer_artifact_paths: Optional[CustomerArtifactPaths] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerArtifactPaths') }})
    device_minutes: Optional[DeviceMinutes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceMinutes') }})
    device_pool_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePoolArn') }})
    device_selection_result: Optional[DeviceSelectionResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceSelectionResult') }})
    event_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventCount') }})
    job_timeout_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobTimeoutMinutes') }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    location: Optional[Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_profile: Optional[NetworkProfile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkProfile') }})
    parsing_result_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parsingResultUrl') }})
    platform: Optional[DevicePlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    radios: Optional[Radios] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radios') }})
    result: Optional[ExecutionResultEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    result_code: Optional[ExecutionResultCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultCode') }})
    seed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seed') }})
    skip_app_resign: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipAppResign') }})
    started: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('started'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[ExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    stopped: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopped'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    test_spec_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testSpecArn') }})
    total_jobs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalJobs') }})
    type: Optional[TestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    web_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webUrl') }})
    
