from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import retryoptions


@dataclass_json
@dataclass
class DynamicPartitioningConfiguration:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    retry_options: Optional[retryoptions.RetryOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetryOptions' }})
    
