from dataclasses import dataclass, field
from . import *


@dataclass
class GetIdentityMailFromDomainAttributesResponse:
    r"""GetIdentityMailFromDomainAttributesResponse
    Represents the custom MAIL FROM attributes for a list of identities.
    """
    
    mail_from_domain_attributes: dict[str, IdentityMailFromDomainAttributes] = field()
    
