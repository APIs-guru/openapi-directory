from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateBackendAuthPasswordPolicyConfig:
    r"""CreateBackendAuthPasswordPolicyConfig
    The password policy configuration for the backend to your Amplify project.
    """
    
    minimum_length: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumLength') }})
    additional_constraints: Optional[List[AdditionalConstraintsElementEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalConstraints') }})
    
