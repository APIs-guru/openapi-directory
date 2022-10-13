from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import executorconfiguration
from . import executortype_enum


@dataclass_json
@dataclass
class ActionTypeExecutor:
    configuration: executorconfiguration.ExecutorConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration' }})
    job_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobTimeout' }})
    policy_statements_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyStatementsTemplate' }})
    type: executortype_enum.ExecutorTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
