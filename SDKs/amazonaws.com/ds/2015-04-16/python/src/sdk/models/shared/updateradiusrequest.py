from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateRadiusRequest:
    r"""UpdateRadiusRequest
    Contains the inputs for the <a>UpdateRadius</a> operation.
    """
    
    directory_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    radius_settings: RadiusSettings = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RadiusSettings') }})
    
