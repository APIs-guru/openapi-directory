from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import acknowledgeactionconfiguration
from . import customeractionname_enum
from . import disableactionconfiguration
from . import enableactionconfiguration
from . import resetactionconfiguration
from . import snoozeactionconfiguration


@dataclass_json
@dataclass
class CustomerAction:
    acknowledge_action_configuration: Optional[acknowledgeactionconfiguration.AcknowledgeActionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acknowledgeActionConfiguration' }})
    action_name: Optional[customeractionname_enum.CustomerActionNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionName' }})
    disable_action_configuration: Optional[disableactionconfiguration.DisableActionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableActionConfiguration' }})
    enable_action_configuration: Optional[enableactionconfiguration.EnableActionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableActionConfiguration' }})
    reset_action_configuration: Optional[resetactionconfiguration.ResetActionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resetActionConfiguration' }})
    snooze_action_configuration: Optional[snoozeactionconfiguration.SnoozeActionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snoozeActionConfiguration' }})
    
