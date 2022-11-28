from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LambdaActivity:
    r"""LambdaActivity
    An activity that runs a Lambda function to modify the message.
    """
    
    batch_size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchSize') }})
    lambda_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaName') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    
