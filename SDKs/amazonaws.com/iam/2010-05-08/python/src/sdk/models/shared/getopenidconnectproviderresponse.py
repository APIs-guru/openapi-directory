from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class GetOpenIDConnectProviderResponse:
    r"""GetOpenIDConnectProviderResponse
    Contains the response to a successful <a>GetOpenIDConnectProvider</a> request. 
    """
    
    client_id_list: Optional[List[str]] = field(default=None)
    create_date: Optional[datetime] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    thumbprint_list: Optional[List[str]] = field(default=None)
    url: Optional[str] = field(default=None)
    
