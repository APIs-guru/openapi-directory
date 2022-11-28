from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListObjectParentPathsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    path_to_object_identifiers_list: Optional[List[PathToObjectIdentifiers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PathToObjectIdentifiersList') }})
    
