from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateRepositoryResponse:
    catalog_data: Optional[RepositoryCatalogData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogData') }})
    repository: Optional[Repository] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    
