from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import networkprofiletype_enum


@dataclass_json
@dataclass
class CreateNetworkProfileRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    downlink_bandwidth_bits: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downlinkBandwidthBits' }})
    downlink_delay_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downlinkDelayMs' }})
    downlink_jitter_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downlinkJitterMs' }})
    downlink_loss_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downlinkLossPercent' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    project_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectArn' }})
    type: Optional[networkprofiletype_enum.NetworkProfileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uplink_bandwidth_bits: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uplinkBandwidthBits' }})
    uplink_delay_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uplinkDelayMs' }})
    uplink_jitter_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uplinkJitterMs' }})
    uplink_loss_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uplinkLossPercent' }})
    
