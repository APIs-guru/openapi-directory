from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import actionconfigurationproperty
from . import actiontypeid
from . import artifactdetails
from . import artifactdetails
from . import actiontypesettings


@dataclass_json
@dataclass
class ActionType:
    action_configuration_properties: Optional[List[actionconfigurationproperty.ActionConfigurationProperty]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionConfigurationProperties' }})
    id: actiontypeid.ActionTypeID = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    input_artifact_details: artifactdetails.ArtifactDetails = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputArtifactDetails' }})
    output_artifact_details: artifactdetails.ArtifactDetails = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputArtifactDetails' }})
    settings: Optional[actiontypesettings.ActionTypeSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    
