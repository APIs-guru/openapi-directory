from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateOntapVolumeConfiguration:
    r"""UpdateOntapVolumeConfiguration
    Used to specify changes to the ONTAP configuration for the volume you are updating.
    """
    
    junction_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JunctionPath') }})
    security_style: Optional[SecurityStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityStyle') }})
    size_in_megabytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SizeInMegabytes') }})
    storage_efficiency_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageEfficiencyEnabled') }})
    tiering_policy: Optional[TieringPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TieringPolicy') }})
    
