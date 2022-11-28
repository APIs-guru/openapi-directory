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
class UpdateListenerRequest:
    listener_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListenerArn') }})
    client_affinity: Optional[ClientAffinityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientAffinity') }})
    port_ranges: Optional[List[PortRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortRanges') }})
    protocol: Optional[ProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocol') }})
    
