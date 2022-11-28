from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateTaskSetRequest:
    cluster: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    service: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    task_definition: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskDefinition') }})
    capacity_provider_strategy: Optional[List[CapacityProviderStrategyItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityProviderStrategy') }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    launch_type: Optional[LaunchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchType') }})
    load_balancers: Optional[List[LoadBalancer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancers') }})
    network_configuration: Optional[NetworkConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfiguration') }})
    platform_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformVersion') }})
    scale: Optional[Scale] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scale') }})
    service_registries: Optional[List[ServiceRegistry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRegistries') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
