from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LocationConfiguration:
    r"""LocationConfiguration
    <p>A remote location where a multi-location fleet can deploy EC2 instances for game hosting. </p> <p> <b>Related actions</b> </p> <p> <a>CreateFleet</a> </p>
    """
    
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    
