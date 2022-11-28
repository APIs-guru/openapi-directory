from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribeConfigurationRecordersRequest:
    r"""DescribeConfigurationRecordersRequest
    The input for the <a>DescribeConfigurationRecorders</a> action.
    """
    
    configuration_recorder_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationRecorderNames') }})
    
