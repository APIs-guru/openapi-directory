from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import rdshttpendpointconfig
from . import relationaldatabasesourcetype_enum


@dataclass_json
@dataclass
class RelationalDatabaseDataSourceConfig:
    rds_http_endpoint_config: Optional[rdshttpendpointconfig.RdsHTTPEndpointConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rdsHttpEndpointConfig' }})
    relational_database_source_type: Optional[relationaldatabasesourcetype_enum.RelationalDatabaseSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationalDatabaseSourceType' }})
    
