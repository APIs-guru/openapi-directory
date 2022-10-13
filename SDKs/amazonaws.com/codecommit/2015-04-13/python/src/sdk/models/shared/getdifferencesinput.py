from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetDifferencesInput:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    after_commit_specifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'afterCommitSpecifier' }})
    after_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'afterPath' }})
    before_commit_specifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beforeCommitSpecifier' }})
    before_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beforePath' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    
