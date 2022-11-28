from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImageRecipe:
    r"""ImageRecipe
    An image recipe.
    """
    
    additional_instance_configuration: Optional[AdditionalInstanceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalInstanceConfiguration') }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    block_device_mappings: Optional[List[InstanceBlockDeviceMapping]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockDeviceMappings') }})
    components: Optional[List[ComponentConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('components') }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCreated') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    parent_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentImage') }})
    platform: Optional[PlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[ImageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    working_directory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workingDirectory') }})
    
