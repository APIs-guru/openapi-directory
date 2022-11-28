from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LocationAttributes:
    r"""LocationAttributes
    <p>Represents a location in a multi-location fleet.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetLocationAttributes</a> </p>
    """
    
    location_state: Optional[LocationState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocationState') }})
    stopped_actions: Optional[List[FleetActionEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StoppedActions') }})
    update_status: Optional[LocationUpdateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateStatus') }})
    
