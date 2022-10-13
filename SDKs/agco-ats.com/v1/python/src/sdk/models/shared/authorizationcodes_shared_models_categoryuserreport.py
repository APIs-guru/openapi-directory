from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import authorizationcodes_shared_models_category
from . import authorizationcodes_shared_models_authorizationcodeuser


@dataclass_json
@dataclass
class AuthorizationCodesSharedModelsCategoryUserReport:
    categories: Optional[List[authorizationcodes_shared_models_category.AuthorizationCodesSharedModelsCategory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Categories' }})
    user: Optional[authorizationcodes_shared_models_authorizationcodeuser.AuthorizationCodesSharedModelsAuthorizationCodeUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'User' }})
    
