from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteAggregationAuthorizationRequest:
    authorized_account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorizedAccountId') }})
    authorized_aws_region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorizedAwsRegion') }})
    
