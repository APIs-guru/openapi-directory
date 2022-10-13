from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import deploymentcircuitbreaker


@dataclass_json
@dataclass
class DeploymentConfiguration:
    deployment_circuit_breaker: Optional[deploymentcircuitbreaker.DeploymentCircuitBreaker] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentCircuitBreaker' }})
    maximum_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumPercent' }})
    minimum_healthy_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumHealthyPercent' }})
    
