from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AggregationAuthorization:
    aggregation_authorization_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AggregationAuthorizationArn' }})
    authorized_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorizedAccountId' }})
    authorized_aws_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorizedAwsRegion' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
