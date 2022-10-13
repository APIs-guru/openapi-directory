from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SourceRevision:
    action_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionName' }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    revision_summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionSummary' }})
    revision_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionUrl' }})
    
