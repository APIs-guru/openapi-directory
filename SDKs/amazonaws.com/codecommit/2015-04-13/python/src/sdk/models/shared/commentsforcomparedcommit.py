from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import comment
from . import location


@dataclass_json
@dataclass
class CommentsForComparedCommit:
    after_blob_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'afterBlobId' }})
    after_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'afterCommitId' }})
    before_blob_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beforeBlobId' }})
    before_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beforeCommitId' }})
    comments: Optional[List[comment.Comment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    
