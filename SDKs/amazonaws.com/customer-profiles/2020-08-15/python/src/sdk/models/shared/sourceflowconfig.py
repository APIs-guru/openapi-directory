from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceFlowConfig:
    r"""SourceFlowConfig
    Contains information about the configuration of the source connector used in the flow.
    """
    
    connector_type: SourceConnectorTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectorType') }})
    source_connector_properties: SourceConnectorProperties = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceConnectorProperties') }})
    connector_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectorProfileName') }})
    incremental_pull_config: Optional[IncrementalPullConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncrementalPullConfig') }})
    
