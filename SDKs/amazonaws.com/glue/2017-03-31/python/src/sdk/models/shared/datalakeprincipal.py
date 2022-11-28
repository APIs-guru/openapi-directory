from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DataLakePrincipal:
    r"""DataLakePrincipal
    The Lake Formation principal.
    """
    
    data_lake_principal_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataLakePrincipalIdentifier') }})
    
