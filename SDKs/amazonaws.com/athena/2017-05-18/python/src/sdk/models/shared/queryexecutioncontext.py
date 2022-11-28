from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class QueryExecutionContext:
    r"""QueryExecutionContext
    The database and data catalog context in which the query execution occurs.
    """
    
    catalog: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Catalog') }})
    database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Database') }})
    
