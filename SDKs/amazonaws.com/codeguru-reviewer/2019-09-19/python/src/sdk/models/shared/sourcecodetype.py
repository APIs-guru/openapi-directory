from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import branchdiffsourcecodetype
from . import commitdiffsourcecodetype
from . import repositoryheadsourcecodetype
from . import requestmetadata
from . import s3bucketrepository


@dataclass_json
@dataclass
class SourceCodeType:
    branch_diff: Optional[branchdiffsourcecodetype.BranchDiffSourceCodeType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BranchDiff' }})
    commit_diff: Optional[commitdiffsourcecodetype.CommitDiffSourceCodeType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CommitDiff' }})
    repository_head: Optional[repositoryheadsourcecodetype.RepositoryHeadSourceCodeType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepositoryHead' }})
    request_metadata: Optional[requestmetadata.RequestMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestMetadata' }})
    s3_bucket_repository: Optional[s3bucketrepository.S3BucketRepository] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BucketRepository' }})
    
