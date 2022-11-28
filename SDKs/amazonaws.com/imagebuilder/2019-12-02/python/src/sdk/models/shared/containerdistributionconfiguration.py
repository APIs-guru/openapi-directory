from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContainerDistributionConfiguration:
    r"""ContainerDistributionConfiguration
    Container distribution settings for encryption, licensing, and sharing in a specific Region.
    """
    
    target_repository: TargetContainerRepository = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetRepository') }})
    container_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerTags') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
