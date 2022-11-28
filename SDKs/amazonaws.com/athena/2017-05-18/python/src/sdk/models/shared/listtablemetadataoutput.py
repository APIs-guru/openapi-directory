from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTableMetadataOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    table_metadata_list: Optional[List[TableMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableMetadataList') }})
    
