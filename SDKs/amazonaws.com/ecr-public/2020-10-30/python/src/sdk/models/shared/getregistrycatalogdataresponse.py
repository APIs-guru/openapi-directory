from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetRegistryCatalogDataResponse:
    registry_catalog_data: RegistryCatalogData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryCatalogData') }})
    
