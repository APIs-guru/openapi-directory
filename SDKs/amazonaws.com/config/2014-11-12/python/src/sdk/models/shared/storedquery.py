from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StoredQuery:
    r"""StoredQuery
    Provides the details of a stored query.
    """
    
    query_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Expression') }})
    query_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryArn') }})
    query_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryId') }})
    
