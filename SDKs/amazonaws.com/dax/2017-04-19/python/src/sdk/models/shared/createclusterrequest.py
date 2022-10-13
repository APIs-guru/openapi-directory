from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import clusterendpointencryptiontype_enum
from . import ssespecification
from . import tag


@dataclass_json
@dataclass
class CreateClusterRequest:
    availability_zones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZones' }})
    cluster_endpoint_encryption_type: Optional[clusterendpointencryptiontype_enum.ClusterEndpointEncryptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterEndpointEncryptionType' }})
    cluster_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    iam_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IamRoleArn' }})
    node_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NodeType' }})
    notification_topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationTopicArn' }})
    parameter_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterGroupName' }})
    preferred_maintenance_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreferredMaintenanceWindow' }})
    replication_factor: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationFactor' }})
    sse_specification: Optional[ssespecification.SseSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SSESpecification' }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupIds' }})
    subnet_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetGroupName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
