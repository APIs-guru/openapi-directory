from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ec2config
from . import taglistentry


@dataclass_json
@dataclass
class CreateLocationEfsRequest:
    ec2_config: ec2config.Ec2Config = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ec2Config' }})
    efs_filesystem_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EfsFilesystemArn' }})
    subdirectory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subdirectory' }})
    tags: Optional[List[taglistentry.TagListEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
