from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateRepositoryNameInput:
    r"""UpdateRepositoryNameInput
    Represents the input of an update repository description operation.
    """
    
    new_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('newName') }})
    old_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('oldName') }})
    
