from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Attribute:
    r"""Attribute
    An attribute is a name-value pair associated with an Amazon ECS object. Attributes enable you to extend the Amazon ECS data model by adding custom metadata to your resources. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes\">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetId') }})
    target_type: Optional[TargetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetType') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
