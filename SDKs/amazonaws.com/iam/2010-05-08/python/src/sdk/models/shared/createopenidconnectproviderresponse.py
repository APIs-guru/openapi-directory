from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CreateOpenIDConnectProviderResponse:
    r"""CreateOpenIDConnectProviderResponse
    Contains the response to a successful <a>CreateOpenIDConnectProvider</a> request. 
    """
    
    open_id_connect_provider_arn: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
