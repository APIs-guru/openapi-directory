from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateSystemModelsUpdateMetricsDataPackageErrorsRecord:
    client_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientCount' }})
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    long_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LongDescription' }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShortDescription' }})
    
