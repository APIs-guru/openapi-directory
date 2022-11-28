from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TableToReload:
    r"""TableToReload
    Provides the name of the schema and table to be reloaded.
    """
    
    schema_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaName') }})
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    
