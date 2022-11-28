from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceIDPreference:
    r"""ResourceIDPreference
    Describes the resource type and its ID preference for the user's Amazon Web Services account, in the current Amazon Web Services Region.
    """
    
    resource_id_type: Optional[ResourceIDTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceIdType') }})
    resources: Optional[List[ResourceEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resources') }})
    
