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
class UpdateLocationNfsRequest:
    location_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocationArn') }})
    mount_options: Optional[NfsMountOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MountOptions') }})
    on_prem_config: Optional[OnPremConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnPremConfig') }})
    subdirectory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subdirectory') }})
    
