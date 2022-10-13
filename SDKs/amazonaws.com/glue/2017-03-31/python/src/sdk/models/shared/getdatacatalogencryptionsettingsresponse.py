from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datacatalogencryptionsettings


@dataclass_json
@dataclass
class GetDataCatalogEncryptionSettingsResponse:
    data_catalog_encryption_settings: Optional[datacatalogencryptionsettings.DataCatalogEncryptionSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataCatalogEncryptionSettings' }})
    
