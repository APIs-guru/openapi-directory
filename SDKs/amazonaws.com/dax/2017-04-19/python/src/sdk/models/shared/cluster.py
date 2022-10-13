from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import endpoint
from . import clusterendpointencryptiontype_enum
from . import node
from . import notificationconfiguration
from . import parametergroupstatus
from . import ssedescription
from . import securitygroupmembership


@dataclass_json
@dataclass
class Cluster:
    active_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActiveNodes' }})
    cluster_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterArn' }})
    cluster_discovery_endpoint: Optional[endpoint.Endpoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterDiscoveryEndpoint' }})
    cluster_endpoint_encryption_type: Optional[clusterendpointencryptiontype_enum.ClusterEndpointEncryptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterEndpointEncryptionType' }})
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    iam_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IamRoleArn' }})
    node_ids_to_remove: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NodeIdsToRemove' }})
    node_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NodeType' }})
    nodes: Optional[List[node.Node]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Nodes' }})
    notification_configuration: Optional[notificationconfiguration.NotificationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationConfiguration' }})
    parameter_group: Optional[parametergroupstatus.ParameterGroupStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterGroup' }})
    preferred_maintenance_window: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreferredMaintenanceWindow' }})
    sse_description: Optional[ssedescription.SseDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SSEDescription' }})
    security_groups: Optional[List[securitygroupmembership.SecurityGroupMembership]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroups' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    subnet_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetGroup' }})
    total_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalNodes' }})
    
