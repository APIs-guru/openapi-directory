from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import repositorycatalogdata


@dataclass_json
@dataclass
class GetRepositoryCatalogDataResponse:
    catalog_data: Optional[repositorycatalogdata.RepositoryCatalogData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalogData' }})
    
