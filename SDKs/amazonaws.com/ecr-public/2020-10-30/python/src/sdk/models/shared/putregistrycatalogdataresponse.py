from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import registrycatalogdata


@dataclass_json
@dataclass
class PutRegistryCatalogDataResponse:
    registry_catalog_data: registrycatalogdata.RegistryCatalogData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registryCatalogData' }})
    
