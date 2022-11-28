from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GeneratedPolicyResult:
    r"""GeneratedPolicyResult
    Contains the text for the generated policy and its details.
    """
    
    properties: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    generated_policies: Optional[List[GeneratedPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generatedPolicies') }})
    
