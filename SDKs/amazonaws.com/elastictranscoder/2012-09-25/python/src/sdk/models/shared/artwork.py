from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import encryption


@dataclass_json
@dataclass
class Artwork:
    album_art_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlbumArtFormat' }})
    encryption: Optional[encryption.Encryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Encryption' }})
    input_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputKey' }})
    max_height: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxHeight' }})
    max_width: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxWidth' }})
    padding_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaddingPolicy' }})
    sizing_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SizingPolicy' }})
    
