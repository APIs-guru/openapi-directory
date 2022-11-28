from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MetadataInfo:
    r"""MetadataInfo
    A structure containing metadata information for a schema version.
    """
    
    created_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedTime') }})
    metadata_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetadataValue') }})
    other_metadata_value_list: Optional[List[OtherMetadataValueListItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherMetadataValueList') }})
    
