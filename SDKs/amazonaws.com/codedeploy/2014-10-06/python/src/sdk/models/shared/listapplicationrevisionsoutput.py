from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListApplicationRevisionsOutput:
    r"""ListApplicationRevisionsOutput
    Represents the output of a <code>ListApplicationRevisions</code> operation.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    revisions: Optional[List[RevisionLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisions') }})
    
