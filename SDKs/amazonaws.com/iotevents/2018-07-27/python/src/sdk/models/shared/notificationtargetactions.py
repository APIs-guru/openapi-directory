from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import lambdaaction


@dataclass_json
@dataclass
class NotificationTargetActions:
    lambda_action: Optional[lambdaaction.LambdaAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaAction' }})
    
