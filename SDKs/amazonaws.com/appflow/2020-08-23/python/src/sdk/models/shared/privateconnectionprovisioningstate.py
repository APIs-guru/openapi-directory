from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import privateconnectionprovisioningfailurecause_enum
from . import privateconnectionprovisioningstatus_enum


@dataclass_json
@dataclass
class PrivateConnectionProvisioningState:
    failure_cause: Optional[privateconnectionprovisioningfailurecause_enum.PrivateConnectionProvisioningFailureCauseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureCause' }})
    failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureMessage' }})
    status: Optional[privateconnectionprovisioningstatus_enum.PrivateConnectionProvisioningStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
