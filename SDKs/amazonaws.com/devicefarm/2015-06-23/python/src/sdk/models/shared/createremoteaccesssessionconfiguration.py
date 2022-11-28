from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateRemoteAccessSessionConfiguration:
    r"""CreateRemoteAccessSessionConfiguration
    Configuration settings for a remote access session, including billing method.
    """
    
    billing_method: Optional[BillingMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingMethod') }})
    vpce_configuration_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpceConfigurationArns') }})
    
