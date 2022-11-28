from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Artwork:
    r"""Artwork
    <p>The file to be used as album art. There can be multiple artworks associated with an audio file, to a maximum of 20.</p> <p>To remove artwork or leave the artwork empty, you can either set <code>Artwork</code> to null, or set the <code>Merge Policy</code> to \"Replace\" and use an empty <code>Artwork</code> array.</p> <p>To pass through existing artwork unchanged, set the <code>Merge Policy</code> to \"Prepend\", \"Append\", or \"Fallback\", and use an empty <code>Artwork</code> array.</p>
    """
    
    album_art_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlbumArtFormat') }})
    encryption: Optional[Encryption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encryption') }})
    input_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputKey') }})
    max_height: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxHeight') }})
    max_width: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxWidth') }})
    padding_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaddingPolicy') }})
    sizing_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SizingPolicy') }})
    
