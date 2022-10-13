from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import componentconfigurationupdate
from . import componentrunwith


@dataclass_json
@dataclass
class ComponentDeploymentSpecification:
    component_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentVersion' }})
    configuration_update: Optional[componentconfigurationupdate.ComponentConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationUpdate' }})
    run_with: Optional[componentrunwith.ComponentRunWith] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runWith' }})
    
