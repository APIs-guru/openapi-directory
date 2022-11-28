from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetApplicationRevisionsInput:
    r"""BatchGetApplicationRevisionsInput
    Represents the input of a <code>BatchGetApplicationRevisions</code> operation.
    """
    
    application_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    revisions: List[RevisionLocation] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisions') }})
    
