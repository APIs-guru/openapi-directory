from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SecurityServicePolicyData:
    r"""SecurityServicePolicyData
    Details about the security service that is being used to protect the resources.
    """
    
    type: SecurityServiceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    managed_service_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ManagedServiceData') }})
    
