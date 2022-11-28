from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WebBackendConnectionRequestBody:
    connection_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    with_refreshed_catalog: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('withRefreshedCatalog') }})
    
