from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribeIdentityInput:
    r"""DescribeIdentityInput
    Input to the <code>DescribeIdentity</code> action.
    """
    
    identity_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityId') }})
    
