from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import additionalinstanceconfiguration
from . import instanceblockdevicemapping
from . import componentconfiguration
from . import platform_enum
from . import imagetype_enum


@dataclass_json
@dataclass
class ImageRecipe:
    additional_instance_configuration: Optional[additionalinstanceconfiguration.AdditionalInstanceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalInstanceConfiguration' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    block_device_mappings: Optional[List[instanceblockdevicemapping.InstanceBlockDeviceMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockDeviceMappings' }})
    components: Optional[List[componentconfiguration.ComponentConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'components' }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateCreated' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    parent_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentImage' }})
    platform: Optional[platform_enum.PlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: Optional[imagetype_enum.ImageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    working_directory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workingDirectory' }})
    
