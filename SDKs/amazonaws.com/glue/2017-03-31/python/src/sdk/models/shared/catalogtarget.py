from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CatalogTarget:
    r"""CatalogTarget
    Specifies an Glue Data Catalog target.
    """
    
    database_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    tables: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tables') }})
    
