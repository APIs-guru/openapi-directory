from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListSamlProvidersResponse:
    r"""ListSamlProvidersResponse
    Contains the response to a successful <a>ListSAMLProviders</a> request. 
    """
    
    saml_provider_list: Optional[List[SamlProviderListEntry]] = field(default=None)
    
