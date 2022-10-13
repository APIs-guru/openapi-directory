from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import configuration
from . import monitoringconfiguration


@dataclass_json
@dataclass
class ConfigurationOverrides:
    application_configuration: Optional[List[configuration.Configuration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationConfiguration' }})
    monitoring_configuration: Optional[monitoringconfiguration.MonitoringConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitoringConfiguration' }})
    
