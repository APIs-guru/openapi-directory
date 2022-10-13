from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateApplicationRequest:
    cwe_monitor_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CWEMonitorEnabled' }})
    ops_center_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpsCenterEnabled' }})
    ops_item_sns_topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpsItemSNSTopicArn' }})
    remove_sns_topic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemoveSNSTopic' }})
    resource_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceGroupName' }})
    
