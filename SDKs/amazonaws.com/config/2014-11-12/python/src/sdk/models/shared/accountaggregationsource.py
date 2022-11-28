from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccountAggregationSource:
    r"""AccountAggregationSource
    A collection of accounts and regions.
    """
    
    account_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountIds') }})
    all_aws_regions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllAwsRegions') }})
    aws_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsRegions') }})
    
