from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DataflowEndpointConfig:
    dataflow_endpoint_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataflowEndpointName' }})
    dataflow_endpoint_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataflowEndpointRegion' }})
    
