from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CreateSamlProviderResponse:
    r"""CreateSamlProviderResponse
    Contains the response to a successful <a>CreateSAMLProvider</a> request. 
    """
    
    saml_provider_arn: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
