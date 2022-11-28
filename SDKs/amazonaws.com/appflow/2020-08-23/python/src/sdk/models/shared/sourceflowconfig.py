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
    
    connector_type: ConnectorTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorType') }})
    source_connector_properties: SourceConnectorProperties = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceConnectorProperties') }})
    connector_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorProfileName') }})
    incremental_pull_config: Optional[IncrementalPullConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incrementalPullConfig') }})
    
