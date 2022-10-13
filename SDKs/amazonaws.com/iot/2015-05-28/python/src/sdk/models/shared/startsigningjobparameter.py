from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import destination
from . import signingprofileparameter


@dataclass_json
@dataclass
class StartSigningJobParameter:
    destination: Optional[destination.Destination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    signing_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signingProfileName' }})
    signing_profile_parameter: Optional[signingprofileparameter.SigningProfileParameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signingProfileParameter' }})
    
