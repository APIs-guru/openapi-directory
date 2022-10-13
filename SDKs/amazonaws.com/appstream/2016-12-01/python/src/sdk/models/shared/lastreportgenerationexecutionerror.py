from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import usagereportexecutionerrorcode_enum


@dataclass_json
@dataclass
class LastReportGenerationExecutionError:
    error_code: Optional[usagereportexecutionerrorcode_enum.UsageReportExecutionErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    
