from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import healthcheckconfiguration
from . import instanceconfiguration
from . import sourceconfiguration


@dataclass_json
@dataclass
class UpdateServiceRequest:
    auto_scaling_configuration_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingConfigurationArn' }})
    health_check_configuration: Optional[healthcheckconfiguration.HealthCheckConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthCheckConfiguration' }})
    instance_configuration: Optional[instanceconfiguration.InstanceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceConfiguration' }})
    service_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceArn' }})
    source_configuration: Optional[sourceconfiguration.SourceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceConfiguration' }})
    
