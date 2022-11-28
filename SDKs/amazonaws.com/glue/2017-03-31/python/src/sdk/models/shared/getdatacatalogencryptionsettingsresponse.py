from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetDataCatalogEncryptionSettingsResponse:
    data_catalog_encryption_settings: Optional[DataCatalogEncryptionSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataCatalogEncryptionSettings') }})
    
