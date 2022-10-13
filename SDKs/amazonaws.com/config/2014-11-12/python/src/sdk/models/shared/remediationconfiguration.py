from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import executioncontrols
from . import remediationparametervalue
from . import remediationtargettype_enum


@dataclass_json
@dataclass
class RemediationConfiguration:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    automatic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Automatic' }})
    config_rule_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigRuleName' }})
    created_by_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedByService' }})
    execution_controls: Optional[executioncontrols.ExecutionControls] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionControls' }})
    maximum_automatic_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumAutomaticAttempts' }})
    parameters: Optional[dict[str, remediationparametervalue.RemediationParameterValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    retry_attempt_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetryAttemptSeconds' }})
    target_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetId' }})
    target_type: remediationtargettype_enum.RemediationTargetTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetType' }})
    target_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetVersion' }})
    
