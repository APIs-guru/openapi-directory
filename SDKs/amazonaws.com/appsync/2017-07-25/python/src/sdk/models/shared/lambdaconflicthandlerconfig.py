from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LambdaConflictHandlerConfig:
    r"""LambdaConflictHandlerConfig
    The <code>LambdaConflictHandlerConfig</code> object when configuring LAMBDA as the Conflict Handler.
    """
    
    lambda_conflict_handler_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaConflictHandlerArn') }})
    
