from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeConfigurationRecordersResponse:
    r"""DescribeConfigurationRecordersResponse
    The output for the <a>DescribeConfigurationRecorders</a> action.
    """
    
    configuration_recorders: Optional[List[ConfigurationRecorder]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationRecorders') }})
    
