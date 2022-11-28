from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CapacityProviderStrategyItem:
    r"""CapacityProviderStrategyItem
    <p>The details of a capacity provider strategy. A capacity provider strategy can be set when using the <a>RunTask</a> or <a>CreateCluster</a> APIs or as the default capacity provider strategy for a cluster with the <a>CreateCluster</a> API.</p> <p>Only capacity providers that are already associated with a cluster and have an <code>ACTIVE</code> or <code>UPDATING</code> status can be used in a capacity provider strategy. The <a>PutClusterCapacityProviders</a> API is used to associate a capacity provider with a cluster.</p> <p>If specifying a capacity provider that uses an Auto Scaling group, the capacity provider must already be created. New Auto Scaling group capacity providers can be created with the <a>CreateCapacityProvider</a> API operation.</p> <p>To use a Fargate capacity provider, specify either the <code>FARGATE</code> or <code>FARGATE_SPOT</code> capacity providers. The Fargate capacity providers are available to all accounts and only need to be associated with a cluster to be used in a capacity provider strategy.</p> <p>A capacity provider strategy may contain a maximum of 6 capacity providers.</p>
    """
    
    capacity_provider: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityProvider') }})
    base: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base') }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    
