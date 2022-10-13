from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import nfsmountoptions
from . import onpremconfig


@dataclass_json
@dataclass
class DescribeLocationNfsResponse:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    location_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocationArn' }})
    location_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocationUri' }})
    mount_options: Optional[nfsmountoptions.NfsMountOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MountOptions' }})
    on_prem_config: Optional[onpremconfig.OnPremConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnPremConfig' }})
    
