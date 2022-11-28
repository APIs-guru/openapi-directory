from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnableRadiusRequest:
    r"""EnableRadiusRequest
    Contains the inputs for the <a>EnableRadius</a> operation.
    """
    
    directory_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    radius_settings: RadiusSettings = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RadiusSettings') }})
    
