from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RelationalDatabaseDataSourceConfig:
    r"""RelationalDatabaseDataSourceConfig
    Describes a relational database data source configuration.
    """
    
    rds_http_endpoint_config: Optional[RdsHTTPEndpointConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rdsHttpEndpointConfig') }})
    relational_database_source_type: Optional[RelationalDatabaseSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationalDatabaseSourceType') }})
    
