from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeLocationSmbResponse:
    r"""DescribeLocationSmbResponse
    DescribeLocationSmbResponse
    """
    
    agent_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgentArns') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domain') }})
    location_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocationArn') }})
    location_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocationUri') }})
    mount_options: Optional[SmbMountOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MountOptions') }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('User') }})
    
