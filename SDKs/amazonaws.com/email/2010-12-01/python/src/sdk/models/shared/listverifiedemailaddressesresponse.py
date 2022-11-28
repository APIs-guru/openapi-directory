from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ListVerifiedEmailAddressesResponse:
    r"""ListVerifiedEmailAddressesResponse
    A list of email addresses that you have verified with Amazon SES under your AWS account.
    """
    
    verified_email_addresses: Optional[List[str]] = field(default=None)
    
