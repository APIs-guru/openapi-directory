from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attachment
from . import clusterconfiguration
from . import capacityproviderstrategyitem
from . import clustersetting
from . import keyvaluepair
from . import tag


@dataclass_json
@dataclass
class Cluster:
    active_services_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeServicesCount' }})
    attachments: Optional[List[attachment.Attachment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachments' }})
    attachments_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachmentsStatus' }})
    capacity_providers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacityProviders' }})
    cluster_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterArn' }})
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterName' }})
    configuration: Optional[clusterconfiguration.ClusterConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration' }})
    default_capacity_provider_strategy: Optional[List[capacityproviderstrategyitem.CapacityProviderStrategyItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultCapacityProviderStrategy' }})
    pending_tasks_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pendingTasksCount' }})
    registered_container_instances_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registeredContainerInstancesCount' }})
    running_tasks_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runningTasksCount' }})
    settings: Optional[List[clustersetting.ClusterSetting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    statistics: Optional[List[keyvaluepair.KeyValuePair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statistics' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
