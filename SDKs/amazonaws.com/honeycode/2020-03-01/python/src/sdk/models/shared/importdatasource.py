from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import importdatasourceconfig


@dataclass_json
@dataclass
class ImportDataSource:
    data_source_config: importdatasourceconfig.ImportDataSourceConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceConfig' }})
    
