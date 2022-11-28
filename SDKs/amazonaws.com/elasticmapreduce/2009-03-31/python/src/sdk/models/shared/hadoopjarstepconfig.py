from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HadoopJarStepConfig:
    r"""HadoopJarStepConfig
    A job flow step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail.
    """
    
    jar: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Jar') }})
    args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Args') }})
    main_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MainClass') }})
    properties: Optional[List[KeyValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Properties') }})
    
