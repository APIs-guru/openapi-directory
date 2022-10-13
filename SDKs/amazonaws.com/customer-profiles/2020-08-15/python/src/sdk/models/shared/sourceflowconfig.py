from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import sourceconnectortype_enum
from . import incrementalpullconfig
from . import sourceconnectorproperties


@dataclass_json
@dataclass
class SourceFlowConfig:
    connector_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectorProfileName' }})
    connector_type: sourceconnectortype_enum.SourceConnectorTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectorType' }})
    incremental_pull_config: Optional[incrementalpullconfig.IncrementalPullConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncrementalPullConfig' }})
    source_connector_properties: sourceconnectorproperties.SourceConnectorProperties = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceConnectorProperties' }})
    
