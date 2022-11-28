from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateClusterRequest:
    cluster_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterName') }})
    iam_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IamRoleArn') }})
    node_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeType') }})
    replication_factor: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationFactor') }})
    availability_zones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZones') }})
    cluster_endpoint_encryption_type: Optional[ClusterEndpointEncryptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterEndpointEncryptionType') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    notification_topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationTopicArn') }})
    parameter_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterGroupName') }})
    preferred_maintenance_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreferredMaintenanceWindow') }})
    sse_specification: Optional[SseSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SSESpecification') }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIds') }})
    subnet_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetGroupName') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
