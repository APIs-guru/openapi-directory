from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import globalresources_shared_models_translationsetstring
from . import api_pagedresponsemetadata


@dataclass_json
@dataclass
class APIIPagedResponseGlobalResourcesSharedModelsTranslationSetString:
    entities: Optional[List[globalresources_shared_models_translationsetstring.GlobalResourcesSharedModelsTranslationSetString]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entities' }})
    metadata: Optional[api_pagedresponsemetadata.APIPagedResponseMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metadata' }})
    
