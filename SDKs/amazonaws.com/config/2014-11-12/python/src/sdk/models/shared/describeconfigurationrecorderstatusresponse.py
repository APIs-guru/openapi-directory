from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeConfigurationRecorderStatusResponse:
    r"""DescribeConfigurationRecorderStatusResponse
    The output for the <a>DescribeConfigurationRecorderStatus</a> action, in JSON format.
    """
    
    configuration_recorders_status: Optional[List[ConfigurationRecorderStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationRecordersStatus') }})
    
