from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DataflowEndpointConfig:
    r"""DataflowEndpointConfig
    Information about the dataflow endpoint <code>Config</code>.
    """
    
    dataflow_endpoint_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataflowEndpointName') }})
    dataflow_endpoint_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataflowEndpointRegion') }})
    
