from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import pullrequeststatusenum_enum


@dataclass_json
@dataclass
class ListPullRequestsInput:
    author_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorArn' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    pull_request_status: Optional[pullrequeststatusenum_enum.PullRequestStatusEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestStatus' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    
