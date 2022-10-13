from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import billingmethod_enum
from . import counters
from . import customerartifactpaths
from . import deviceminutes
from . import deviceselectionresult
from . import location
from . import networkprofile
from . import deviceplatform_enum
from . import radios
from . import executionresult_enum
from . import executionresultcode_enum
from . import executionstatus_enum
from . import testtype_enum


@dataclass_json
@dataclass
class Run:
    app_upload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appUpload' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    billing_method: Optional[billingmethod_enum.BillingMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingMethod' }})
    completed_jobs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completedJobs' }})
    counters: Optional[counters.Counters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'counters' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    customer_artifact_paths: Optional[customerartifactpaths.CustomerArtifactPaths] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerArtifactPaths' }})
    device_minutes: Optional[deviceminutes.DeviceMinutes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceMinutes' }})
    device_pool_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePoolArn' }})
    device_selection_result: Optional[deviceselectionresult.DeviceSelectionResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceSelectionResult' }})
    event_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventCount' }})
    job_timeout_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobTimeoutMinutes' }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale' }})
    location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network_profile: Optional[networkprofile.NetworkProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkProfile' }})
    parsing_result_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parsingResultUrl' }})
    platform: Optional[deviceplatform_enum.DevicePlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    radios: Optional[radios.Radios] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radios' }})
    result: Optional[executionresult_enum.ExecutionResultEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    result_code: Optional[executionresultcode_enum.ExecutionResultCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultCode' }})
    seed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seed' }})
    skip_app_resign: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipAppResign' }})
    started: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[executionstatus_enum.ExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    stopped: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopped', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    test_spec_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testSpecArn' }})
    total_jobs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalJobs' }})
    type: Optional[testtype_enum.TestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    web_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webUrl' }})
    
