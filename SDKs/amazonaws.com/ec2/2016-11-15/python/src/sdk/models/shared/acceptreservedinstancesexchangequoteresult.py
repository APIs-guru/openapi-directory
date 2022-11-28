from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AcceptReservedInstancesExchangeQuoteResult:
    r"""AcceptReservedInstancesExchangeQuoteResult
    The result of the exchange and whether it was <code>successful</code>.
    """
    
    exchange_id: Optional[str] = field(default=None)
    
