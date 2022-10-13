from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OpenXJSONSerDe:
    case_insensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CaseInsensitive' }})
    column_to_json_key_mappings: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ColumnToJsonKeyMappings' }})
    convert_dots_in_json_keys_to_underscores: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConvertDotsInJsonKeysToUnderscores' }})
    
