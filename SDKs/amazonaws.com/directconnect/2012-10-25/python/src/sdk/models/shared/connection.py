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
class Connection:
    r"""Connection
    Information about an Direct Connect connection.
    """
    
    aws_device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsDevice') }})
    aws_device_v2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsDeviceV2') }})
    aws_logical_device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsLogicalDeviceId') }})
    bandwidth: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidth') }})
    connection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    connection_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionName') }})
    connection_state: Optional[ConnectionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionState') }})
    encryption_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionMode') }})
    has_logical_redundancy: Optional[HasLogicalRedundancyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasLogicalRedundancy') }})
    jumbo_frame_capable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jumboFrameCapable') }})
    lag_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lagId') }})
    loa_issue_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loaIssueTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    mac_sec_capable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('macSecCapable') }})
    mac_sec_keys: Optional[List[MacSecKey]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('macSecKeys') }})
    owner_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerAccount') }})
    partner_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerName') }})
    port_encryption_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portEncryptionStatus') }})
    provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerName') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    vlan: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    
