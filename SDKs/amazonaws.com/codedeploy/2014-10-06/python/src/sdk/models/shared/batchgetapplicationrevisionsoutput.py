from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetApplicationRevisionsOutput:
    r"""BatchGetApplicationRevisionsOutput
    Represents the output of a <code>BatchGetApplicationRevisions</code> operation.
    """
    
    application_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    revisions: Optional[List[RevisionInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisions') }})
    
