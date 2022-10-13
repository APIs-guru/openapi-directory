from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListTagsForResourceMessage:
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceArn' }})
    resource_arn_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceArnList' }})
    
