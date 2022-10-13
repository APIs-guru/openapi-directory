from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import contentsubmission_shared_businessentities_release
from . import api_pagedresponsemetadata


@dataclass_json
@dataclass
class APIPagedResponseContentSubmissionSharedBusinessEntitiesRelease:
    entities: List[contentsubmission_shared_businessentities_release.ContentSubmissionSharedBusinessEntitiesRelease] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entities' }})
    metadata: api_pagedresponsemetadata.APIPagedResponseMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metadata' }})
    
