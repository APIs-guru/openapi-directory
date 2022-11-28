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
class ApplicationSummary:
    r"""ApplicationSummary
    <p>A summary of information about a AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
    """
    
    application_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationId') }})
    application_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    application_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationUrl') }})
    application_creation_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationCreationDate') }})
    application_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationDescription') }})
    application_last_update_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationLastUpdateDate') }})
    application_state: Optional[ApplicationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationState') }})
    
