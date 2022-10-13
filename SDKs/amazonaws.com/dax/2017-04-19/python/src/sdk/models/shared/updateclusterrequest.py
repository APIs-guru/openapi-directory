from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateClusterRequest:
    cluster_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    notification_topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationTopicArn' }})
    notification_topic_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationTopicStatus' }})
    parameter_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterGroupName' }})
    preferred_maintenance_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreferredMaintenanceWindow' }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupIds' }})
    
