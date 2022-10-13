from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import webhookbuildtype_enum
from . import webhookfilter


@dataclass_json
@dataclass
class Webhook:
    branch_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branchFilter' }})
    build_type: Optional[webhookbuildtype_enum.WebhookBuildTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildType' }})
    filter_groups: Optional[List[List[webhookfilter.WebhookFilter]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterGroups' }})
    last_modified_secret: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedSecret', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    payload_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payloadUrl' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
