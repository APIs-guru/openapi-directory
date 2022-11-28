from dataclasses import dataclass, field



@dataclass
class GetIdentityPoliciesResponse:
    r"""GetIdentityPoliciesResponse
    Represents the requested sending authorization policies.
    """
    
    policies: dict[str, str] = field()
    
