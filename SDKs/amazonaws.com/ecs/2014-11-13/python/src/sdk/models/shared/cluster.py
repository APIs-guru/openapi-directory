from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Cluster:
    r"""Cluster
    A regional grouping of one or more container instances on which you can run task requests. Each account receives a default cluster the first time you use the Amazon ECS service, but you may also create other clusters. Clusters may contain more than one instance type simultaneously.
    """
    
    active_services_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeServicesCount') }})
    attachments: Optional[List[Attachment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachments') }})
    attachments_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachmentsStatus') }})
    capacity_providers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityProviders') }})
    cluster_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterArn') }})
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterName') }})
    configuration: Optional[ClusterConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    default_capacity_provider_strategy: Optional[List[CapacityProviderStrategyItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultCapacityProviderStrategy') }})
    pending_tasks_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pendingTasksCount') }})
    registered_container_instances_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registeredContainerInstancesCount') }})
    running_tasks_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runningTasksCount') }})
    settings: Optional[List[ClusterSetting]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    statistics: Optional[List[KeyValuePair]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistics') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
