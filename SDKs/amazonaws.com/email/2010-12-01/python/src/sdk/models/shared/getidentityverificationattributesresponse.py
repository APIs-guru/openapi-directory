from dataclasses import dataclass, field
from . import *


@dataclass
class GetIdentityVerificationAttributesResponse:
    r"""GetIdentityVerificationAttributesResponse
    The Amazon SES verification status of a list of identities. For domain identities, this response also contains the verification token.
    """
    
    verification_attributes: dict[str, IdentityVerificationAttributes] = field()
    
