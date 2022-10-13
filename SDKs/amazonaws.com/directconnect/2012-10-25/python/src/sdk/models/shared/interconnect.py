from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import haslogicalredundancy_enum
from . import interconnectstate_enum
from . import tag


@dataclass_json
@dataclass
class Interconnect:
    aws_device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsDevice' }})
    aws_device_v2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsDeviceV2' }})
    aws_logical_device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsLogicalDeviceId' }})
    bandwidth: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandwidth' }})
    has_logical_redundancy: Optional[haslogicalredundancy_enum.HasLogicalRedundancyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasLogicalRedundancy' }})
    interconnect_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interconnectId' }})
    interconnect_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interconnectName' }})
    interconnect_state: Optional[interconnectstate_enum.InterconnectStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interconnectState' }})
    jumbo_frame_capable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jumboFrameCapable' }})
    lag_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lagId' }})
    loa_issue_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loaIssueTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerName' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
