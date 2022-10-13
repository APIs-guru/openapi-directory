from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DirectoryLimits:
    cloud_only_directories_current_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudOnlyDirectoriesCurrentCount' }})
    cloud_only_directories_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudOnlyDirectoriesLimit' }})
    cloud_only_directories_limit_reached: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudOnlyDirectoriesLimitReached' }})
    cloud_only_microsoft_ad_current_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudOnlyMicrosoftADCurrentCount' }})
    cloud_only_microsoft_ad_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudOnlyMicrosoftADLimit' }})
    cloud_only_microsoft_ad_limit_reached: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudOnlyMicrosoftADLimitReached' }})
    connected_directories_current_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectedDirectoriesCurrentCount' }})
    connected_directories_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectedDirectoriesLimit' }})
    connected_directories_limit_reached: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectedDirectoriesLimitReached' }})
    
