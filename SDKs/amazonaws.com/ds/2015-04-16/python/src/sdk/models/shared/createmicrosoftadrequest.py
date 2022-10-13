from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import directoryedition_enum
from . import tag
from . import directoryvpcsettings


@dataclass_json
@dataclass
class CreateMicrosoftAdRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    edition: Optional[directoryedition_enum.DirectoryEditionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Edition' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Password' }})
    short_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShortName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    vpc_settings: directoryvpcsettings.DirectoryVpcSettings = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcSettings' }})
    
