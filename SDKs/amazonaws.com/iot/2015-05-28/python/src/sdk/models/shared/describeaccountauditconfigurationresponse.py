from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeAccountAuditConfigurationResponse:
    audit_check_configurations: Optional[dict[str, AuditCheckConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditCheckConfigurations') }})
    audit_notification_target_configurations: Optional[dict[str, AuditNotificationTarget]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditNotificationTargetConfigurations') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    
