from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import oassupport_shared_models_translationkey
from . import api_pagedresponsemetadata


@dataclass_json
@dataclass
class APIIPagedResponseOasSupportSharedModelsTranslationKey:
    entities: Optional[List[oassupport_shared_models_translationkey.OasSupportSharedModelsTranslationKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entities' }})
    metadata: Optional[api_pagedresponsemetadata.APIPagedResponseMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metadata' }})
    
