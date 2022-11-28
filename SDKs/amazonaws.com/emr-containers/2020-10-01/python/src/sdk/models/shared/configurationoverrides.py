from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConfigurationOverrides:
    r"""ConfigurationOverrides
    A configuration specification to be used to override existing configurations.
    """
    
    application_configuration: Optional[List[Configuration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationConfiguration') }})
    monitoring_configuration: Optional[MonitoringConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoringConfiguration') }})
    
