from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListOpenIDConnectProvidersResponse:
    r"""ListOpenIDConnectProvidersResponse
    Contains the response to a successful <a>ListOpenIDConnectProviders</a> request. 
    """
    
    open_id_connect_provider_list: Optional[List[OpenIDConnectProviderListEntry]] = field(default=None)
    
