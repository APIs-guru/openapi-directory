from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribeHsmRequest:
    r"""DescribeHsmRequest
    Contains the inputs for the <a>DescribeHsm</a> operation.
    """
    
    hsm_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HsmArn') }})
    hsm_serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HsmSerialNumber') }})
    
