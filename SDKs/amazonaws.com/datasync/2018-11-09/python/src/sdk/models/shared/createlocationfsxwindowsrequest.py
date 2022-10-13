from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import taglistentry


@dataclass_json
@dataclass
class CreateLocationFsxWindowsRequest:
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Domain' }})
    fsx_filesystem_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FsxFilesystemArn' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Password' }})
    security_group_arns: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupArns' }})
    subdirectory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subdirectory' }})
    tags: Optional[List[taglistentry.TagListEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    user: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'User' }})
    
