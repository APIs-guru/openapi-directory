from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datacatalogencryptionsettings


@dataclass_json
@dataclass
class PutDataCatalogEncryptionSettingsRequest:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    data_catalog_encryption_settings: datacatalogencryptionsettings.DataCatalogEncryptionSettings = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataCatalogEncryptionSettings' }})
    
