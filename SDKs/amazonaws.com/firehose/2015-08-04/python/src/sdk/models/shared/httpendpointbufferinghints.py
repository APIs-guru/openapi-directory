from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HTTPEndpointBufferingHints:
    r"""HTTPEndpointBufferingHints
    Describes the buffering options that can be applied before data is delivered to the HTTP endpoint destination. Kinesis Data Firehose treats these options as hints, and it might choose to use more optimal values. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other. 
    """
    
    interval_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntervalInSeconds') }})
    size_in_m_bs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SizeInMBs') }})
    
