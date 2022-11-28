from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartSigningJobParameter:
    r"""StartSigningJobParameter
    Information required to start a signing job.
    """
    
    destination: Optional[Destination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    signing_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signingProfileName') }})
    signing_profile_parameter: Optional[SigningProfileParameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signingProfileParameter') }})
    
