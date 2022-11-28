from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ApplicationInfo:
    r"""ApplicationInfo
    Describes the status of the application.
    """
    
    cwe_monitor_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CWEMonitorEnabled') }})
    life_cycle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LifeCycle') }})
    ops_center_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpsCenterEnabled') }})
    ops_item_sns_topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpsItemSNSTopicArn') }})
    remarks: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Remarks') }})
    resource_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceGroupName') }})
    
