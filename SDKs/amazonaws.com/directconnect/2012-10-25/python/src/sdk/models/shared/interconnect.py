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
class Interconnect:
    r"""Interconnect
    Information about an interconnect.
    """
    
    aws_device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsDevice') }})
    aws_device_v2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsDeviceV2') }})
    aws_logical_device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsLogicalDeviceId') }})
    bandwidth: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidth') }})
    has_logical_redundancy: Optional[HasLogicalRedundancyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasLogicalRedundancy') }})
    interconnect_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interconnectId') }})
    interconnect_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interconnectName') }})
    interconnect_state: Optional[InterconnectStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interconnectState') }})
    jumbo_frame_capable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jumboFrameCapable') }})
    lag_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lagId') }})
    loa_issue_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loaIssueTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerName') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
