from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import outputresources
from . import platform_enum
from . import imagestate
from . import imagetype_enum


@dataclass_json
@dataclass
class ImageSummary:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateCreated' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    os_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osVersion' }})
    output_resources: Optional[outputresources.OutputResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputResources' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    platform: Optional[platform_enum.PlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    state: Optional[imagestate.ImageState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: Optional[imagetype_enum.ImageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
