from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeCaCertificateResponse:
    r"""DescribeCaCertificateResponse
    The output from the DescribeCACertificate operation.
    """
    
    certificate_description: Optional[CaCertificateDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateDescription') }})
    registration_config: Optional[RegistrationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrationConfig') }})
    
