from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import httpurldestinationproperties
from . import topicruledestinationstatus_enum
from . import vpcdestinationproperties


@dataclass_json
@dataclass
class TopicRuleDestination:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    http_url_properties: Optional[httpurldestinationproperties.HTTPURLDestinationProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpUrlProperties' }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[topicruledestinationstatus_enum.TopicRuleDestinationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusReason' }})
    vpc_properties: Optional[vpcdestinationproperties.VpcDestinationProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcProperties' }})
    
