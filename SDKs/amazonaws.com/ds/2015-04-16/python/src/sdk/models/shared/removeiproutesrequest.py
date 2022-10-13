from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RemoveIPRoutesRequest:
    cidr_ips: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CidrIps' }})
    directory_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    
