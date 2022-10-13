from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecord:
    bundle_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BundleNumber' }})
    client_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientCount' }})
    release_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReleaseName' }})
    
