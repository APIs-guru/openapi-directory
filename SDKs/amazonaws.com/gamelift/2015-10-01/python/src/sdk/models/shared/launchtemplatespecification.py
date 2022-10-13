from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LaunchTemplateSpecification:
    launch_template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LaunchTemplateId' }})
    launch_template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LaunchTemplateName' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
