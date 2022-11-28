from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OpenXJSONSerDe:
    r"""OpenXJSONSerDe
    The OpenX SerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the native Hive / HCatalog JsonSerDe.
    """
    
    case_insensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CaseInsensitive') }})
    column_to_json_key_mappings: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnToJsonKeyMappings') }})
    convert_dots_in_json_keys_to_underscores: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConvertDotsInJsonKeysToUnderscores') }})
    
