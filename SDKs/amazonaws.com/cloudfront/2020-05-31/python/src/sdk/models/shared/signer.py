from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class Signer:
    r"""Signer
    A list of accounts and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies.
    """
    
    aws_account_number: Optional[str] = field(default=None)
    key_pair_ids: Optional[KeyPairIds] = field(default=None)
    
