from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accessendpoint
from . import applicationsettings
from . import storageconnector
from . import usersetting


@dataclass_json
@dataclass
class CreateStackRequest:
    access_endpoints: Optional[List[accessendpoint.AccessEndpoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessEndpoints' }})
    application_settings: Optional[applicationsettings.ApplicationSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationSettings' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    embed_host_domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmbedHostDomains' }})
    feedback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeedbackURL' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    redirect_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RedirectURL' }})
    storage_connectors: Optional[List[storageconnector.StorageConnector]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageConnectors' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    user_settings: Optional[List[usersetting.UserSetting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserSettings' }})
    
