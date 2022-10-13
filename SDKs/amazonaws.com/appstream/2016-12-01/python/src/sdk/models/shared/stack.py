from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accessendpoint
from . import applicationsettingsresponse
from . import stackerror
from . import storageconnector
from . import usersetting


@dataclass_json
@dataclass
class Stack:
    access_endpoints: Optional[List[accessendpoint.AccessEndpoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessEndpoints' }})
    application_settings: Optional[applicationsettingsresponse.ApplicationSettingsResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationSettings' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    embed_host_domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmbedHostDomains' }})
    feedback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeedbackURL' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    redirect_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RedirectURL' }})
    stack_errors: Optional[List[stackerror.StackError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackErrors' }})
    storage_connectors: Optional[List[storageconnector.StorageConnector]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageConnectors' }})
    user_settings: Optional[List[usersetting.UserSetting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserSettings' }})
    
