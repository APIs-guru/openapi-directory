from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UploadDocumentsResponse:
    r"""UploadDocumentsResponse
    Contains the response to an <code>UploadDocuments</code> request.
    """
    
    adds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adds') }})
    deletes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletes') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    warnings: Optional[List[DocumentServiceWarning]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
