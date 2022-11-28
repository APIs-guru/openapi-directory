from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NamedQuery:
    r"""NamedQuery
    A query, where <code>QueryString</code> is the list of SQL query statements that comprise the query.
    """
    
    database: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Database') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    query_string: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryString') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    named_query_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NamedQueryId') }})
    work_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkGroup') }})
    
