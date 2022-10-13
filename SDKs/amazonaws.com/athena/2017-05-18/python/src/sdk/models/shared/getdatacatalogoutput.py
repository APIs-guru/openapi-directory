from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datacatalog


@dataclass_json
@dataclass
class GetDataCatalogOutput:
    data_catalog: Optional[datacatalog.DataCatalog] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataCatalog' }})
    
