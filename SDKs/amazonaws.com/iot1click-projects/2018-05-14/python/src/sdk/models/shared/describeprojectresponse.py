from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import projectdescription


@dataclass_json
@dataclass
class DescribeProjectResponse:
    project: projectdescription.ProjectDescription = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project' }})
    
