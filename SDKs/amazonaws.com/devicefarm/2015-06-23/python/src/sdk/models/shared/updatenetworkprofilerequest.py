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
class UpdateNetworkProfileRequest:
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    downlink_bandwidth_bits: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downlinkBandwidthBits') }})
    downlink_delay_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downlinkDelayMs') }})
    downlink_jitter_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downlinkJitterMs') }})
    downlink_loss_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downlinkLossPercent') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[NetworkProfileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uplink_bandwidth_bits: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uplinkBandwidthBits') }})
    uplink_delay_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uplinkDelayMs') }})
    uplink_jitter_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uplinkJitterMs') }})
    uplink_loss_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uplinkLossPercent') }})
    
