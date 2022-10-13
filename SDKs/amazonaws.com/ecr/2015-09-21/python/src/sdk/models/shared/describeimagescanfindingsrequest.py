from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import imageidentifier


@dataclass_json
@dataclass
class DescribeImageScanFindingsRequest:
    image_id: imageidentifier.ImageIdentifier = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageId' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registryId' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    
