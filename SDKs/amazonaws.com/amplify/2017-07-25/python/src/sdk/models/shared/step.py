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
class Step:
    r"""Step
     Describes an execution step, for an execution job, for an Amplify app. 
    """
    
    end_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: JobStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    step_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stepName') }})
    artifacts_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactsUrl') }})
    context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    log_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logUrl') }})
    screenshots: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screenshots') }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusReason') }})
    test_artifacts_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testArtifactsUrl') }})
    test_config_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testConfigUrl') }})
    
