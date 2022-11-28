from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RemediationConfiguration:
    r"""RemediationConfiguration
    An object that represents the details about the remediation configuration that includes the remediation action, parameters, and data to execute the action.
    """
    
    config_rule_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRuleName') }})
    target_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetId') }})
    target_type: RemediationTargetTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetType') }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    automatic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Automatic') }})
    created_by_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedByService') }})
    execution_controls: Optional[ExecutionControls] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionControls') }})
    maximum_automatic_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumAutomaticAttempts') }})
    parameters: Optional[dict[str, RemediationParameterValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    retry_attempt_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryAttemptSeconds') }})
    target_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetVersion') }})
    
