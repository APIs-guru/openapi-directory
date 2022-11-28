from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDirectoryConfigRequest:
    directory_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryName') }})
    organizational_unit_distinguished_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationalUnitDistinguishedNames') }})
    service_account_credentials: Optional[ServiceAccountCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceAccountCredentials') }})
    
