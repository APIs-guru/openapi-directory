from dataclasses import dataclass, field
from typing import List


@dataclass
class VerifyDomainDkimResponse:
    r"""VerifyDomainDkimResponse
    Returns CNAME records that you must publish to the DNS server of your domain to set up Easy DKIM with Amazon SES.
    """
    
    dkim_tokens: List[str] = field()
    
