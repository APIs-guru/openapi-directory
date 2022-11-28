from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PullRequestSourceReferenceUpdatedEventMetadata:
    r"""PullRequestSourceReferenceUpdatedEventMetadata
    Information about an update to the source branch of a pull request.
    """
    
    after_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('afterCommitId') }})
    before_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beforeCommitId') }})
    merge_base: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeBase') }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    
