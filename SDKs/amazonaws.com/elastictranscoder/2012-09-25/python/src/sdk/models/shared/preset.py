from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import audioparameters
from . import thumbnails
from . import videoparameters


@dataclass_json
@dataclass
class Preset:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    audio: Optional[audioparameters.AudioParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Audio' }})
    container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Container' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    thumbnails: Optional[thumbnails.Thumbnails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Thumbnails' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    video: Optional[videoparameters.VideoParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Video' }})
    
