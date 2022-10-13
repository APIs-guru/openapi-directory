from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeSharedDirectoriesRequest:
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    owner_directory_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerDirectoryId' }})
    shared_directory_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SharedDirectoryIds' }})
    
