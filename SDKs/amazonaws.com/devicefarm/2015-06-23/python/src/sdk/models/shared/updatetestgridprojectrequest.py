from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import testgridvpcconfig


@dataclass_json
@dataclass
class UpdateTestGridProjectRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    project_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectArn' }})
    vpc_config: Optional[testgridvpcconfig.TestGridVpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcConfig' }})
    
