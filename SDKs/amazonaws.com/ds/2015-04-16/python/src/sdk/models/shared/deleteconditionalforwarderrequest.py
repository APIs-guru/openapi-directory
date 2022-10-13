from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteConditionalForwarderRequest:
    directory_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    remote_domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemoteDomainName' }})
    
