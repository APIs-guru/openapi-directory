from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import cacertificateupdateaction_enum


@dataclass_json
@dataclass
class UpdateCaCertificateParams:
    action: cacertificateupdateaction_enum.CaCertificateUpdateActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    
