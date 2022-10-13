from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import connectionstate_enum
from . import haslogicalredundancy_enum
from . import macseckey
from . import tag


@dataclass_json
@dataclass
class Connection:
    aws_device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsDevice' }})
    aws_device_v2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsDeviceV2' }})
    aws_logical_device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsLogicalDeviceId' }})
    bandwidth: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandwidth' }})
    connection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionId' }})
    connection_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionName' }})
    connection_state: Optional[connectionstate_enum.ConnectionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionState' }})
    encryption_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionMode' }})
    has_logical_redundancy: Optional[haslogicalredundancy_enum.HasLogicalRedundancyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasLogicalRedundancy' }})
    jumbo_frame_capable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jumboFrameCapable' }})
    lag_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lagId' }})
    loa_issue_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loaIssueTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    mac_sec_capable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'macSecCapable' }})
    mac_sec_keys: Optional[List[macseckey.MacSecKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'macSecKeys' }})
    owner_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerAccount' }})
    partner_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partnerName' }})
    port_encryption_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portEncryptionStatus' }})
    provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerName' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    vlan: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlan' }})
    
