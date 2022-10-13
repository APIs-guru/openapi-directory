from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import auditcheckconfiguration
from . import auditnotificationtarget


@dataclass_json
@dataclass
class DescribeAccountAuditConfigurationResponse:
    audit_check_configurations: Optional[dict[str, auditcheckconfiguration.AuditCheckConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auditCheckConfigurations' }})
    audit_notification_target_configurations: Optional[dict[str, auditnotificationtarget.AuditNotificationTarget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auditNotificationTargetConfigurations' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    
