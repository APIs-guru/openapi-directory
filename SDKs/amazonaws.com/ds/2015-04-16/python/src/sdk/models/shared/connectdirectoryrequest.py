from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import directoryconnectsettings
from . import directorysize_enum
from . import tag


@dataclass_json
@dataclass
class ConnectDirectoryRequest:
    connect_settings: directoryconnectsettings.DirectoryConnectSettings = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectSettings' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Password' }})
    short_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShortName' }})
    size: directorysize_enum.DirectorySizeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Size' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
