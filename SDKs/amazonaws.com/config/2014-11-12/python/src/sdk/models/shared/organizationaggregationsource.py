from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OrganizationAggregationSource:
    r"""OrganizationAggregationSource
    This object contains regions to set up the aggregator and an IAM role to retrieve organization details.
    """
    
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    all_aws_regions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllAwsRegions') }})
    aws_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsRegions') }})
    
