from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MetadataKeyValuePair:
    r"""MetadataKeyValuePair
    A structure containing a key value pair for metadata.
    """
    
    metadata_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetadataKey') }})
    metadata_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetadataValue') }})
    
