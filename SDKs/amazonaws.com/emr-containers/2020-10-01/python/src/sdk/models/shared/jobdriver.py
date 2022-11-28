from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobDriver:
    r"""JobDriver
    Specify the driver that the job runs on.
    """
    
    spark_submit_job_driver: Optional[SparkSubmitJobDriver] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkSubmitJobDriver') }})
    
