from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import componentconfiguration
from . import containertype_enum
from . import instanceconfiguration
from . import platform_enum
from . import targetcontainerrepository


@dataclass_json
@dataclass
class ContainerRecipe:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    components: Optional[List[componentconfiguration.ComponentConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'components' }})
    container_type: Optional[containertype_enum.ContainerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerType' }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateCreated' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    dockerfile_template_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerfileTemplateData' }})
    encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encrypted' }})
    instance_configuration: Optional[instanceconfiguration.InstanceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceConfiguration' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    parent_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentImage' }})
    platform: Optional[platform_enum.PlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    target_repository: Optional[targetcontainerrepository.TargetContainerRepository] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetRepository' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    working_directory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workingDirectory' }})
    
