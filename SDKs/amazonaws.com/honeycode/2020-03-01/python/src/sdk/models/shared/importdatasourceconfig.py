from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImportDataSourceConfig:
    r"""ImportDataSourceConfig
     An object that contains the configuration parameters for the data source of an import request. 
    """
    
    data_source_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceUrl') }})
    
