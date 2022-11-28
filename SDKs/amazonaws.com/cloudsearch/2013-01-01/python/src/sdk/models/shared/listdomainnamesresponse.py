from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ListDomainNamesResponse:
    r"""ListDomainNamesResponse
    The result of a <code>ListDomainNames</code> request. Contains a list of the domains owned by an account.
    """
    
    domain_names: Optional[dict[str, str]] = field(default=None)
    
