from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Spend:
    r"""Spend
    <p>The amount of cost or usage that is measured for a budget.</p> <p>For example, a <code>Spend</code> for <code>3 GB</code> of S3 usage would have the following parameters:</p> <ul> <li> <p>An <code>Amount</code> of <code>3</code> </p> </li> <li> <p>A <code>unit</code> of <code>GB</code> </p> </li> </ul>
    """
    
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    unit: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unit') }})
    
