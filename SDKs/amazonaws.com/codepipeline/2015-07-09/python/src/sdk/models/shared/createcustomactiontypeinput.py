from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import actioncategory_enum
from . import actionconfigurationproperty
from . import artifactdetails
from . import artifactdetails
from . import actiontypesettings
from . import tag


@dataclass_json
@dataclass
class CreateCustomActionTypeInput:
    category: actioncategory_enum.ActionCategoryEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    configuration_properties: Optional[List[actionconfigurationproperty.ActionConfigurationProperty]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationProperties' }})
    input_artifact_details: artifactdetails.ArtifactDetails = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputArtifactDetails' }})
    output_artifact_details: artifactdetails.ArtifactDetails = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputArtifactDetails' }})
    provider: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider' }})
    settings: Optional[actiontypesettings.ActionTypeSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
