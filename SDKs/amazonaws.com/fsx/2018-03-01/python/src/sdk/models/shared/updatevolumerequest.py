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
class UpdateVolumeRequest:
    volume_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeId') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    ontap_configuration: Optional[UpdateOntapVolumeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OntapConfiguration') }})
    
