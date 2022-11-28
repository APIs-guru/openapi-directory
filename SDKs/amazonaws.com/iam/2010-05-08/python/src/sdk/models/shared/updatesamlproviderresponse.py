from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class UpdateSamlProviderResponse:
    r"""UpdateSamlProviderResponse
    Contains the response to a successful <a>UpdateSAMLProvider</a> request. 
    """
    
    saml_provider_arn: Optional[str] = field(default=None)
    
