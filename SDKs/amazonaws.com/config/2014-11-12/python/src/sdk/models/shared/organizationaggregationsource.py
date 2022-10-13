from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OrganizationAggregationSource:
    all_aws_regions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllAwsRegions' }})
    aws_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsRegions' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    
