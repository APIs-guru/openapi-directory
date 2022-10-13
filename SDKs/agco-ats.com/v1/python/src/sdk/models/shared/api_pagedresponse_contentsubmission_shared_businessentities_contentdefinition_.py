from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import contentsubmission_shared_businessentities_contentdefinition
from . import api_pagedresponsemetadata


@dataclass_json
@dataclass
class APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition:
    entities: List[contentsubmission_shared_businessentities_contentdefinition.ContentSubmissionSharedBusinessEntitiesContentDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entities' }})
    metadata: api_pagedresponsemetadata.APIPagedResponseMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metadata' }})
    
