from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import encryptionconfiguration
from . import healthcheckconfiguration
from . import instanceconfiguration
from . import sourceconfiguration
from . import tag


@dataclass_json
@dataclass
class CreateServiceRequest:
    auto_scaling_configuration_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingConfigurationArn' }})
    encryption_configuration: Optional[encryptionconfiguration.EncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionConfiguration' }})
    health_check_configuration: Optional[healthcheckconfiguration.HealthCheckConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthCheckConfiguration' }})
    instance_configuration: Optional[instanceconfiguration.InstanceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceConfiguration' }})
    service_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceName' }})
    source_configuration: sourceconfiguration.SourceConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceConfiguration' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
