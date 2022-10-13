from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import authorizationcodes_shared_models_categoryuserreport
from . import api_pagedresponsemetadata


@dataclass_json
@dataclass
class APIIPagedResponseAuthorizationCodesSharedModelsCategoryUserReport:
    entities: Optional[List[authorizationcodes_shared_models_categoryuserreport.AuthorizationCodesSharedModelsCategoryUserReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entities' }})
    metadata: Optional[api_pagedresponsemetadata.APIPagedResponseMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metadata' }})
    
