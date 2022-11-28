from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Image:
    r"""Image
    An Image Builder image. You must specify exactly one recipe for the image – either a container recipe (<code>containerRecipe</code>), which creates a container image, or an image recipe (<code>imageRecipe</code>), which creates an AMI.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    container_recipe: Optional[ContainerRecipe] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerRecipe') }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCreated') }})
    distribution_configuration: Optional[DistributionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributionConfiguration') }})
    enhanced_image_metadata_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enhancedImageMetadataEnabled') }})
    image_recipe: Optional[ImageRecipe] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageRecipe') }})
    image_tests_configuration: Optional[ImageTestsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageTestsConfiguration') }})
    infrastructure_configuration: Optional[InfrastructureConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infrastructureConfiguration') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osVersion') }})
    output_resources: Optional[OutputResources] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputResources') }})
    platform: Optional[PlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    source_pipeline_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourcePipelineArn') }})
    source_pipeline_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourcePipelineName') }})
    state: Optional[ImageState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[ImageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
