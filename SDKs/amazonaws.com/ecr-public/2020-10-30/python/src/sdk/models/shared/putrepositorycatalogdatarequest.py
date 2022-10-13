from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import repositorycatalogdatainput


@dataclass_json
@dataclass
class PutRepositoryCatalogDataRequest:
    catalog_data: repositorycatalogdatainput.RepositoryCatalogDataInput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalogData' }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registryId' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    
