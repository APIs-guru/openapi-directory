from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import containertype_enum
from . import platform_enum


@dataclass_json
@dataclass
class ContainerRecipeSummary:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    container_type: Optional[containertype_enum.ContainerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerType' }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateCreated' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    parent_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentImage' }})
    platform: Optional[platform_enum.PlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
