from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetComponentVersionArtifactResponse:
    pre_signed_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preSignedUrl' }})
    
