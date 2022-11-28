from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExecutorConfiguration:
    r"""ExecutorConfiguration
    The action engine, or executor, related to the supported integration model used to create and update the action type. The available executor types are <code>Lambda</code> and <code>JobWorker</code>.
    """
    
    job_worker_executor_configuration: Optional[JobWorkerExecutorConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobWorkerExecutorConfiguration') }})
    lambda_executor_configuration: Optional[LambdaExecutorConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaExecutorConfiguration') }})
    
