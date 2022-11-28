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
class UpdateVpcLinkResponse:
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIds') }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIds') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    vpc_link_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcLinkId') }})
    vpc_link_status: Optional[VpcLinkStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcLinkStatus') }})
    vpc_link_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcLinkStatusMessage') }})
    vpc_link_version: Optional[VpcLinkVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcLinkVersion') }})
    
