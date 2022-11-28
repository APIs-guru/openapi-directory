from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AggregateResourceIdentifier:
    r"""AggregateResourceIdentifier
    The details that identify a resource that is collected by Config aggregator, including the resource type, ID, (if available) the custom resource name, the source account, and source region.
    """
    
    resource_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    resource_type: ResourceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    source_account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceAccountId') }})
    source_region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceRegion') }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceName') }})
    
