from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LaunchTemplateSpecification:
    launch_template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchTemplateId' }})
    launch_template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchTemplateName' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
