from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreateApplicationRequest:
    cwe_monitor_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CWEMonitorEnabled' }})
    ops_center_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpsCenterEnabled' }})
    ops_item_sns_topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpsItemSNSTopicArn' }})
    resource_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceGroupName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
