from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceCodeType:
    r"""SourceCodeType
     Specifies the source code that is analyzed in a code review. 
    """
    
    branch_diff: Optional[BranchDiffSourceCodeType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BranchDiff') }})
    commit_diff: Optional[CommitDiffSourceCodeType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CommitDiff') }})
    repository_head: Optional[RepositoryHeadSourceCodeType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepositoryHead') }})
    request_metadata: Optional[RequestMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestMetadata') }})
    s3_bucket_repository: Optional[S3BucketRepository] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BucketRepository') }})
    
