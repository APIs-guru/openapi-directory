from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ActiveDirectoryBackupAttributes:
    active_directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActiveDirectoryId' }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceARN' }})
    
