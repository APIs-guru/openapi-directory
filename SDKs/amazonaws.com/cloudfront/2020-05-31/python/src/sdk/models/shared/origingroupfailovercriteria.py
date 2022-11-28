from dataclasses import dataclass, field
from . import *


@dataclass
class OriginGroupFailoverCriteria:
    r"""OriginGroupFailoverCriteria
    A complex data type that includes information about the failover criteria for an origin group, including the status codes for which CloudFront will failover from the primary origin to the second origin.
    """
    
    status_codes: StatusCodes = field()
    
