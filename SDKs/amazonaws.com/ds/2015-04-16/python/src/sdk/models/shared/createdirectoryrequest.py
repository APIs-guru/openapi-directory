from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import directorysize_enum
from . import tag
from . import directoryvpcsettings


@dataclass_json
@dataclass
class CreateDirectoryRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Password' }})
    short_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShortName' }})
    size: directorysize_enum.DirectorySizeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Size' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    vpc_settings: Optional[directoryvpcsettings.DirectoryVpcSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcSettings' }})
    
