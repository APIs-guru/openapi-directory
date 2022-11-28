from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StoredQueryMetadata:
    r"""StoredQueryMetadata
    Returns details of a specific query. 
    """
    
    query_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryArn') }})
    query_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryId') }})
    query_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    
