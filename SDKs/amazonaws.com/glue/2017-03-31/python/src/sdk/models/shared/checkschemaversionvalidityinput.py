from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import dataformat_enum


@dataclass_json
@dataclass
class CheckSchemaVersionValidityInput:
    data_format: dataformat_enum.DataFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataFormat' }})
    schema_definition: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaDefinition' }})
    
