from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListTablesInput:
    r"""ListTablesInput
    Represents the input of a <code>ListTables</code> operation.
    """
    
    exclusive_start_table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExclusiveStartTableName') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    
