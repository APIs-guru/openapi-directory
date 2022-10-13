from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import platform_enum
from . import imagetype_enum


@dataclass_json
@dataclass
class ImageVersion:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateCreated' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    os_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osVersion' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    platform: Optional[platform_enum.PlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    type: Optional[imagetype_enum.ImageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
