from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnalyzedResourceSummary:
    r"""AnalyzedResourceSummary
    Contains the ARN of the analyzed resource.
    """
    
    resource_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceArn') }})
    resource_owner_account: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceOwnerAccount') }})
    resource_type: ResourceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    
