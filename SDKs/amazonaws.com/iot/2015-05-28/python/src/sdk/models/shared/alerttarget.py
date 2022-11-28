from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AlertTarget:
    r"""AlertTarget
    A structure containing the alert target ARN and the role ARN.
    """
    
    alert_target_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertTargetArn') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    
