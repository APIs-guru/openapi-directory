from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class GetSamlProviderResponse:
    r"""GetSamlProviderResponse
    Contains the response to a successful <a>GetSAMLProvider</a> request. 
    """
    
    create_date: Optional[datetime] = field(default=None)
    saml_metadata_document: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    valid_until: Optional[datetime] = field(default=None)
    
