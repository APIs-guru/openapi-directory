from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import jobworkerexecutorconfiguration
from . import lambdaexecutorconfiguration


@dataclass_json
@dataclass
class ExecutorConfiguration:
    job_worker_executor_configuration: Optional[jobworkerexecutorconfiguration.JobWorkerExecutorConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobWorkerExecutorConfiguration' }})
    lambda_executor_configuration: Optional[lambdaexecutorconfiguration.LambdaExecutorConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaExecutorConfiguration' }})
    
