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
class DescribeApplicationResponse:
    application_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationArn') }})
    application_creation_date: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationCreationDate') }})
    application_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationId') }})
    application_last_update_date: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationLastUpdateDate') }})
    application_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    application_state: ApplicationStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationState') }})
    application_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationUrl') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    application_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationDescription') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    sso_client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssoClientId') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
