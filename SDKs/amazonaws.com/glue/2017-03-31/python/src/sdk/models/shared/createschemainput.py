from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import compatibility_enum
from . import dataformat_enum
from . import registryid


@dataclass_json
@dataclass
class CreateSchemaInput:
    compatibility: Optional[compatibility_enum.CompatibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Compatibility' }})
    data_format: dataformat_enum.DataFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataFormat' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    registry_id: Optional[registryid.RegistryID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistryId' }})
    schema_definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaDefinition' }})
    schema_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaName' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
