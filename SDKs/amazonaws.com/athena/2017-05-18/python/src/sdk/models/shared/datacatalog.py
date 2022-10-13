from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import datacatalogtype_enum


@dataclass_json
@dataclass
class DataCatalog:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    type: datacatalogtype_enum.DataCatalogTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
