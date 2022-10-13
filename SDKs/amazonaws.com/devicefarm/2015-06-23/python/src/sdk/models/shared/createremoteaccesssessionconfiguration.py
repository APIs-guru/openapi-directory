from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import billingmethod_enum


@dataclass_json
@dataclass
class CreateRemoteAccessSessionConfiguration:
    billing_method: Optional[billingmethod_enum.BillingMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingMethod' }})
    vpce_configuration_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpceConfigurationArns' }})
    
