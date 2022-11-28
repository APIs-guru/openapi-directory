from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RelatedResource:
    r"""RelatedResource
    Information about a related resource.
    """
    
    additional_info: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalInfo') }})
    resource_identifier: Optional[ResourceIdentifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceIdentifier') }})
    resource_type: Optional[ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    
