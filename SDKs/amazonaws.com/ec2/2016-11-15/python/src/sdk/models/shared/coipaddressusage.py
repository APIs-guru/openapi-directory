from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CoipAddressUsage:
    r"""CoipAddressUsage
    Describes address usage for a customer-owned address pool.
    """
    
    allocation_id: Optional[str] = field(default=None)
    aws_account_id: Optional[str] = field(default=None)
    aws_service: Optional[str] = field(default=None)
    co_ip: Optional[str] = field(default=None)
    
