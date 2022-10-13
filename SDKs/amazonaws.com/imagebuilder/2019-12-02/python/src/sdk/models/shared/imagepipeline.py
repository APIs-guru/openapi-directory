from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import imagetestsconfiguration
from . import platform_enum
from . import schedule
from . import pipelinestatus_enum


@dataclass_json
@dataclass
class ImagePipeline:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    container_recipe_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerRecipeArn' }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateCreated' }})
    date_last_run: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateLastRun' }})
    date_next_run: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateNextRun' }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateUpdated' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    distribution_configuration_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributionConfigurationArn' }})
    enhanced_image_metadata_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enhancedImageMetadataEnabled' }})
    image_recipe_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageRecipeArn' }})
    image_tests_configuration: Optional[imagetestsconfiguration.ImageTestsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageTestsConfiguration' }})
    infrastructure_configuration_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infrastructureConfigurationArn' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    platform: Optional[platform_enum.PlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    schedule: Optional[schedule.Schedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    status: Optional[pipelinestatus_enum.PipelineStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
