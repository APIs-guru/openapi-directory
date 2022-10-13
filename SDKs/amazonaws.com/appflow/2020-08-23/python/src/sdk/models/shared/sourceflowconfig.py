from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import connectortype_enum
from . import incrementalpullconfig
from . import sourceconnectorproperties


@dataclass_json
@dataclass
class SourceFlowConfig:
    connector_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorProfileName' }})
    connector_type: connectortype_enum.ConnectorTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorType' }})
    incremental_pull_config: Optional[incrementalpullconfig.IncrementalPullConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incrementalPullConfig' }})
    source_connector_properties: sourceconnectorproperties.SourceConnectorProperties = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceConnectorProperties' }})
    
