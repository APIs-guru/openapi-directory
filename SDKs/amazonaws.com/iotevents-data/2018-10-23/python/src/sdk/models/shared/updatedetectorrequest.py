from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateDetectorRequest:
    r"""UpdateDetectorRequest
    Information used to update the detector (instance).
    """
    
    detector_model_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectorModelName') }})
    message_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageId') }})
    state: DetectorStateDefinition = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    key_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyValue') }})
    
