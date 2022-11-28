from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImportDataSource:
    r"""ImportDataSource
    An object that has details about the source of the data that was submitted for import.
    """
    
    data_source_config: ImportDataSourceConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceConfig') }})
    
