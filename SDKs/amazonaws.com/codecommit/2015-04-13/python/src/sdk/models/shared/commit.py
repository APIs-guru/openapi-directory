from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userinfo
from . import userinfo


@dataclass_json
@dataclass
class Commit:
    additional_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalData' }})
    author: Optional[userinfo.UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitId' }})
    committer: Optional[userinfo.UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committer' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    parents: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parents' }})
    tree_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'treeId' }})
    
