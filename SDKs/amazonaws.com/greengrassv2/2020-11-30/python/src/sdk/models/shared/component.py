from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import componentlatestversion


@dataclass_json
@dataclass
class Component:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    component_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentName' }})
    latest_version: Optional[componentlatestversion.ComponentLatestVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestVersion' }})
    
