from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResourceRequirements:
    r"""ResourceRequirements
    optional resource requirements to run workers (blank for unbounded allocations)
    """
    
    cpu_limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu_limit') }})
    cpu_request: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu_request') }})
    memory_limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory_limit') }})
    memory_request: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory_request') }})
    
