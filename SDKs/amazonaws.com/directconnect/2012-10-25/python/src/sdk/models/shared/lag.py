from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Lag:
    r"""Lag
    Information about a link aggregation group (LAG).
    """
    
    allows_hosted_connections: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowsHostedConnections') }})
    aws_device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsDevice') }})
    aws_device_v2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsDeviceV2') }})
    aws_logical_device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsLogicalDeviceId') }})
    connections: Optional[List[Connection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    connections_bandwidth: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionsBandwidth') }})
    encryption_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionMode') }})
    has_logical_redundancy: Optional[HasLogicalRedundancyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasLogicalRedundancy') }})
    jumbo_frame_capable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jumboFrameCapable') }})
    lag_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lagId') }})
    lag_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lagName') }})
    lag_state: Optional[LagStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lagState') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    mac_sec_capable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('macSecCapable') }})
    mac_sec_keys: Optional[List[MacSecKey]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('macSecKeys') }})
    minimum_links: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumLinks') }})
    number_of_connections: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfConnections') }})
    owner_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerAccount') }})
    provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerName') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
