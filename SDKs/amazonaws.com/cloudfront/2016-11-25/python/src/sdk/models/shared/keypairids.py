from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class KeyPairIds:
    r"""KeyPairIds
    <p>A complex type that lists the active CloudFront key pairs, if any, that are associated with <code>AwsAccountNumber</code>. </p> <p>For more information, see <a>ActiveTrustedSigners</a>.</p>
    """
    
    quantity: int = field()
    items: Optional[List[str]] = field(default=None)
    
