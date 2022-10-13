from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import contentsubmission_shared_businessentities_contentsubmission
from . import api_pagedresponsemetadata


@dataclass_json
@dataclass
class APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmission:
    entities: List[contentsubmission_shared_businessentities_contentsubmission.ContentSubmissionSharedBusinessEntitiesContentSubmission] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entities' }})
    metadata: api_pagedresponsemetadata.APIPagedResponseMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metadata' }})
    
