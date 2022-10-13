from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteAggregationAuthorizationRequest:
    authorized_account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorizedAccountId' }})
    authorized_aws_region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorizedAwsRegion' }})
    
