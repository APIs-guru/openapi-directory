from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import containerrecipe
from . import distributionconfiguration
from . import imagerecipe
from . import imagetestsconfiguration
from . import infrastructureconfiguration
from . import outputresources
from . import platform_enum
from . import imagestate
from . import imagetype_enum


@dataclass_json
@dataclass
class Image:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    container_recipe: Optional[containerrecipe.ContainerRecipe] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerRecipe' }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateCreated' }})
    distribution_configuration: Optional[distributionconfiguration.DistributionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributionConfiguration' }})
    enhanced_image_metadata_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enhancedImageMetadataEnabled' }})
    image_recipe: Optional[imagerecipe.ImageRecipe] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageRecipe' }})
    image_tests_configuration: Optional[imagetestsconfiguration.ImageTestsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageTestsConfiguration' }})
    infrastructure_configuration: Optional[infrastructureconfiguration.InfrastructureConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infrastructureConfiguration' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    os_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osVersion' }})
    output_resources: Optional[outputresources.OutputResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputResources' }})
    platform: Optional[platform_enum.PlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    source_pipeline_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourcePipelineArn' }})
    source_pipeline_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourcePipelineName' }})
    state: Optional[imagestate.ImageState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: Optional[imagetype_enum.ImageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
