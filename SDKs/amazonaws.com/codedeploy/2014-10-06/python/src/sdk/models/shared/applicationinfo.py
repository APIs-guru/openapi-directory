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
class ApplicationInfo:
    r"""ApplicationInfo
    Information about an application.
    """
    
    application_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationId') }})
    application_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    compute_platform: Optional[ComputePlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computePlatform') }})
    create_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    git_hub_account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitHubAccountName') }})
    linked_to_git_hub: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedToGitHub') }})
    
