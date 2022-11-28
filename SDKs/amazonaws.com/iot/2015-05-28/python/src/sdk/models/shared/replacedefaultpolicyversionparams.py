from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReplaceDefaultPolicyVersionParams:
    r"""ReplaceDefaultPolicyVersionParams
    Parameters to define a mitigation action that adds a blank policy to restrict permissions.
    """
    
    template_name: PolicyTemplateNameEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateName') }})
    
