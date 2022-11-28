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
class ContainerRecipe:
    r"""ContainerRecipe
    A container recipe.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    components: Optional[List[ComponentConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('components') }})
    container_type: Optional[ContainerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerType') }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCreated') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dockerfile_template_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerfileTemplateData') }})
    encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encrypted') }})
    instance_configuration: Optional[InstanceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceConfiguration') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    parent_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentImage') }})
    platform: Optional[PlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    target_repository: Optional[TargetContainerRepository] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetRepository') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    working_directory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workingDirectory') }})
    
