from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import synchronousjobread


@dataclass_json
@dataclass
class SourceDefinitionSpecificationRead:
    connection_specification: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionSpecification' }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentationUrl' }})
    job_info: synchronousjobread.SynchronousJobRead = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobInfo' }})
    source_definition_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceDefinitionId' }})
    
