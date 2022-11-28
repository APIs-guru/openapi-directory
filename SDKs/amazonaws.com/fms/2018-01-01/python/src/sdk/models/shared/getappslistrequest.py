from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetAppsListRequest:
    list_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListId') }})
    default_list: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultList') }})
    
