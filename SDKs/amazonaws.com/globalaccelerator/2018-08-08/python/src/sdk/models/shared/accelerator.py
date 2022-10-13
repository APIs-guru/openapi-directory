from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import ipaddresstype_enum
from . import ipset
from . import acceleratorstatus_enum


@dataclass_json
@dataclass
class Accelerator:
    accelerator_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceleratorArn' }})
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsName' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    ip_address_type: Optional[ipaddresstype_enum.IPAddressTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpAddressType' }})
    ip_sets: Optional[List[ipset.IPSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpSets' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    status: Optional[acceleratorstatus_enum.AcceleratorStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
