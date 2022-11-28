from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAccountSendingEnabledResponse:
    r"""GetAccountSendingEnabledResponse
    Represents a request to return the email sending status for your Amazon SES account in the current AWS Region.
    """
    
    enabled: Optional[bool] = field(default=None)
    
