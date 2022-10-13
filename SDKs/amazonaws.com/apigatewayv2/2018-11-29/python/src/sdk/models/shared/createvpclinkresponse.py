from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import vpclinkstatus_enum
from . import vpclinkversion_enum


@dataclass_json
@dataclass
class CreateVpcLinkResponse:
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupIds' }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIds' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    vpc_link_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcLinkId' }})
    vpc_link_status: Optional[vpclinkstatus_enum.VpcLinkStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcLinkStatus' }})
    vpc_link_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcLinkStatusMessage' }})
    vpc_link_version: Optional[vpclinkversion_enum.VpcLinkVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcLinkVersion' }})
    
