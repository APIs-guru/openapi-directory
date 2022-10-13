from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourceconfiguration
from . import variable


@dataclass_json
@dataclass
class ContainerDatasetAction:
    execution_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionRoleArn' }})
    image: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    resource_configuration: resourceconfiguration.ResourceConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceConfiguration' }})
    variables: Optional[List[variable.Variable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variables' }})
    
