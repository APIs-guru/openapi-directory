from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CatalogEntry:
    r"""CatalogEntry
    Specifies a table definition in the Glue Data Catalog.
    """
    
    database_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    
