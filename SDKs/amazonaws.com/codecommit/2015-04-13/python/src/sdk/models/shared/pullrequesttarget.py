from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import mergemetadata


@dataclass_json
@dataclass
class PullRequestTarget:
    destination_commit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationCommit' }})
    destination_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationReference' }})
    merge_base: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergeBase' }})
    merge_metadata: Optional[mergemetadata.MergeMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergeMetadata' }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    source_commit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceCommit' }})
    source_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceReference' }})
    
