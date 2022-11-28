from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribeHapgRequest:
    r"""DescribeHapgRequest
    Contains the inputs for the <a>DescribeHapg</a> action.
    """
    
    hapg_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HapgArn') }})
    
