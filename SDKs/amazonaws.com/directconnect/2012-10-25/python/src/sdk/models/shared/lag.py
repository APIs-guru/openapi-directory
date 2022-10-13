from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import connection
from . import haslogicalredundancy_enum
from . import lagstate_enum
from . import macseckey
from . import tag


@dataclass_json
@dataclass
class Lag:
    allows_hosted_connections: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowsHostedConnections' }})
    aws_device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsDevice' }})
    aws_device_v2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsDeviceV2' }})
    aws_logical_device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsLogicalDeviceId' }})
    connections: Optional[List[connection.Connection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    connections_bandwidth: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionsBandwidth' }})
    encryption_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionMode' }})
    has_logical_redundancy: Optional[haslogicalredundancy_enum.HasLogicalRedundancyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasLogicalRedundancy' }})
    jumbo_frame_capable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jumboFrameCapable' }})
    lag_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lagId' }})
    lag_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lagName' }})
    lag_state: Optional[lagstate_enum.LagStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lagState' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    mac_sec_capable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'macSecCapable' }})
    mac_sec_keys: Optional[List[macseckey.MacSecKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'macSecKeys' }})
    minimum_links: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumLinks' }})
    number_of_connections: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfConnections' }})
    owner_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerAccount' }})
    provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerName' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
