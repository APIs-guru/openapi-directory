from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cacertificatedescription
from . import registrationconfig


@dataclass_json
@dataclass
class DescribeCaCertificateResponse:
    certificate_description: Optional[cacertificatedescription.CaCertificateDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateDescription' }})
    registration_config: Optional[registrationconfig.RegistrationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registrationConfig' }})
    
