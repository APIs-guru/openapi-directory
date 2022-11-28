from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class SamlProviderListEntry:
    r"""SamlProviderListEntry
    Contains the list of SAML providers for this account.
    """
    
    arn: Optional[str] = field(default=None)
    create_date: Optional[datetime] = field(default=None)
    valid_until: Optional[datetime] = field(default=None)
    
