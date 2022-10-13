from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeImagePermissionsRequest:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    shared_aws_account_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SharedAwsAccountIds' }})
    
