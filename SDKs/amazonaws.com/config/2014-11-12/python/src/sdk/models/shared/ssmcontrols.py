from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SsmControls:
    r"""SsmControls
    Amazon Web Services Systems Manager (SSM) specific remediation controls.
    """
    
    concurrent_execution_rate_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConcurrentExecutionRatePercentage') }})
    error_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorPercentage') }})
    
