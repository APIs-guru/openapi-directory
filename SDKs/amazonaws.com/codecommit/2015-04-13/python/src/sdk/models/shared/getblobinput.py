from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetBlobInput:
    blob_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blobId' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    
