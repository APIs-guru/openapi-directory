from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OtherMetadataValueListItem:
    r"""OtherMetadataValueListItem
    A structure containing other metadata for a schema version belonging to the same metadata key.
    """
    
    created_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedTime') }})
    metadata_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetadataValue') }})
    
