from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GenerateAccessLogsResult:
    r"""GenerateAccessLogsResult
     The result structure for the generate access logs request. 
    """
    
    log_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logUrl') }})
    
