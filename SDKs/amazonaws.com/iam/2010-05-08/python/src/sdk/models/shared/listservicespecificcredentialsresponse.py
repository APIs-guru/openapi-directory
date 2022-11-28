from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListServiceSpecificCredentialsResponse:
    service_specific_credentials: Optional[List[ServiceSpecificCredentialMetadata]] = field(default=None)
    
