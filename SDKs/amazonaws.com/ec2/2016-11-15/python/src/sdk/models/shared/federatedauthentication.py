from dataclasses import dataclass, field
from typing import Optional


@dataclass
class FederatedAuthentication:
    r"""FederatedAuthentication
    Describes the IAM SAML identity providers used for federated authentication.
    """
    
    saml_provider_arn: Optional[str] = field(default=None)
    self_service_saml_provider_arn: Optional[str] = field(default=None)
    
