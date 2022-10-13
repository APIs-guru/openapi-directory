from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import devicecertificateupdateaction_enum


@dataclass_json
@dataclass
class UpdateDeviceCertificateParams:
    action: devicecertificateupdateaction_enum.DeviceCertificateUpdateActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    
