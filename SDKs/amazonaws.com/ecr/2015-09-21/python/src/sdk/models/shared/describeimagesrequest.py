from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeImagesRequest:
    repository_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    filter: Optional[DescribeImagesFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    image_ids: Optional[List[ImageIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageIds') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryId') }})
    
