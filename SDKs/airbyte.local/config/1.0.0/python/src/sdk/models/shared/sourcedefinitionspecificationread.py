from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceDefinitionSpecificationRead:
    job_info: SynchronousJobRead = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobInfo') }})
    source_definition_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceDefinitionId') }})
    connection_specification: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionSpecification') }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentationUrl') }})
    
