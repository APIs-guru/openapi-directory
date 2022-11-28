from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetPreparedStatementInput:
    statement_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatementName') }})
    work_group: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkGroup') }})
    
