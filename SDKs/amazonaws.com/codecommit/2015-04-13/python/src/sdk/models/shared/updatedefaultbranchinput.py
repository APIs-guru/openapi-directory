from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateDefaultBranchInput:
    r"""UpdateDefaultBranchInput
    Represents the input of an update default branch operation.
    """
    
    default_branch_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultBranchName') }})
    repository_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    
