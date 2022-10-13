from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PendingAggregationRequest:
    requester_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequesterAccountId' }})
    requester_aws_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequesterAwsRegion' }})
    
