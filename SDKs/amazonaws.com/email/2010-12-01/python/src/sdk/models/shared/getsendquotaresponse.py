from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetSendQuotaResponse:
    r"""GetSendQuotaResponse
    Represents your Amazon SES daily sending quota, maximum send rate, and the number of emails you have sent in the last 24 hours.
    """
    
    max24_hour_send: Optional[float] = field(default=None)
    max_send_rate: Optional[float] = field(default=None)
    sent_last24_hours: Optional[float] = field(default=None)
    
