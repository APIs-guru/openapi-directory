from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateComputerRequest:
    r"""CreateComputerRequest
    Contains the inputs for the <a>CreateComputer</a> operation.
    """
    
    computer_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComputerName') }})
    directory_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    computer_attributes: Optional[List[Attribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComputerAttributes') }})
    organizational_unit_distinguished_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationalUnitDistinguishedName') }})
    
