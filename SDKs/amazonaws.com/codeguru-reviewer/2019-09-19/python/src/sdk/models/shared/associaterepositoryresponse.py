from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssociateRepositoryResponse:
    repository_association: Optional[RepositoryAssociation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepositoryAssociation') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
