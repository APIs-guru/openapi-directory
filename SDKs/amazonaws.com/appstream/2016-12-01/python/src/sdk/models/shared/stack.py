from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Stack:
    r"""Stack
    Describes a stack.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    access_endpoints: Optional[List[AccessEndpoint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessEndpoints') }})
    application_settings: Optional[ApplicationSettingsResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationSettings') }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    embed_host_domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmbedHostDomains') }})
    feedback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeedbackURL') }})
    redirect_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedirectURL') }})
    stack_errors: Optional[List[StackError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackErrors') }})
    storage_connectors: Optional[List[StorageConnector]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageConnectors') }})
    user_settings: Optional[List[UserSetting]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserSettings') }})
    
