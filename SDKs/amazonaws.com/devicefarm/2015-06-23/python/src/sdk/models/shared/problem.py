from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import device
from . import problemdetail
from . import executionresult_enum
from . import problemdetail
from . import problemdetail
from . import problemdetail


@dataclass_json
@dataclass
class Problem:
    device: Optional[device.Device] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    job: Optional[problemdetail.ProblemDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'job' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    result: Optional[executionresult_enum.ExecutionResultEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    run: Optional[problemdetail.ProblemDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'run' }})
    suite: Optional[problemdetail.ProblemDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suite' }})
    test: Optional[problemdetail.ProblemDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'test' }})
    
