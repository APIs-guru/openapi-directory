from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class Signer:
    r"""Signer
    A complex type that lists the AWS accounts that were included in the <code>TrustedSigners</code> complex type, as well as their active CloudFront key pair IDs, if any. 
    """
    
    aws_account_number: Optional[str] = field(default=None)
    key_pair_ids: Optional[KeyPairIds] = field(default=None)
    
