from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateUserImportJobResponse:
    r"""CreateUserImportJobResponse
    Represents the response from the server to the request to create the user import job.
    """
    
    user_import_job: Optional[UserImportJobType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserImportJob') }})
    
