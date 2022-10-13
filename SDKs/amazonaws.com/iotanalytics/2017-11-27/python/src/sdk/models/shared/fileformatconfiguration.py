from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import parquetconfiguration


@dataclass_json
@dataclass
class FileFormatConfiguration:
    json_configuration: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jsonConfiguration' }})
    parquet_configuration: Optional[parquetconfiguration.ParquetConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parquetConfiguration' }})
    
