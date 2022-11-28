from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateStackRequest:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    access_endpoints: Optional[List[AccessEndpoint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessEndpoints') }})
    application_settings: Optional[ApplicationSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationSettings') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    embed_host_domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmbedHostDomains') }})
    feedback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeedbackURL') }})
    redirect_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedirectURL') }})
    storage_connectors: Optional[List[StorageConnector]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageConnectors') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    user_settings: Optional[List[UserSetting]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserSettings') }})
    
