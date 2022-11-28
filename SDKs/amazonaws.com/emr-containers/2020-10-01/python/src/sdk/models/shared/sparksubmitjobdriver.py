from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SparkSubmitJobDriver:
    r"""SparkSubmitJobDriver
    The information about job driver for Spark submit.
    """
    
    entry_point: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryPoint') }})
    entry_point_arguments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryPointArguments') }})
    spark_submit_parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkSubmitParameters') }})
    
