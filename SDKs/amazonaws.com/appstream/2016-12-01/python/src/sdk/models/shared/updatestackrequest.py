from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import accessendpoint
from . import applicationsettings
from . import stackattribute_enum
from . import storageconnector
from . import usersetting


@dataclass_json
@dataclass
class UpdateStackRequest:
    access_endpoints: Optional[List[accessendpoint.AccessEndpoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessEndpoints' }})
    application_settings: Optional[applicationsettings.ApplicationSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationSettings' }})
    attributes_to_delete: Optional[List[stackattribute_enum.StackAttributeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributesToDelete' }})
    delete_storage_connectors: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeleteStorageConnectors' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    embed_host_domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmbedHostDomains' }})
    feedback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeedbackURL' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    redirect_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RedirectURL' }})
    storage_connectors: Optional[List[storageconnector.StorageConnector]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageConnectors' }})
    user_settings: Optional[List[usersetting.UserSetting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserSettings' }})
    
