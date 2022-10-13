from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import acknowledgeflow
from . import initializationconfiguration


@dataclass_json
@dataclass
class AlarmCapabilities:
    acknowledge_flow: Optional[acknowledgeflow.AcknowledgeFlow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acknowledgeFlow' }})
    initialization_configuration: Optional[initializationconfiguration.InitializationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initializationConfiguration' }})
    
