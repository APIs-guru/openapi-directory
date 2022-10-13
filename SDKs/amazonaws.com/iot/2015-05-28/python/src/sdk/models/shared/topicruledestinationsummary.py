from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import httpurldestinationsummary
from . import topicruledestinationstatus_enum
from . import vpcdestinationsummary


@dataclass_json
@dataclass
class TopicRuleDestinationSummary:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    http_url_summary: Optional[httpurldestinationsummary.HTTPURLDestinationSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpUrlSummary' }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[topicruledestinationstatus_enum.TopicRuleDestinationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusReason' }})
    vpc_destination_summary: Optional[vpcdestinationsummary.VpcDestinationSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcDestinationSummary' }})
    
