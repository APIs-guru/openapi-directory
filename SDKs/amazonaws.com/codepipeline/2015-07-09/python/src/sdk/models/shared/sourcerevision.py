from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SourceRevision:
    r"""SourceRevision
    Information about the version (or revision) of a source artifact that initiated a pipeline execution.
    """
    
    action_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionName') }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    revision_summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionSummary') }})
    revision_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionUrl') }})
    
