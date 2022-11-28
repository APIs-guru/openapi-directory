from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class ServiceEndpoint:
    r"""ServiceEndpoint
    The endpoint to which service requests can be submitted, including the actual URL prefix for sending requests and the Amazon Resource Name (ARN) so the endpoint can be referenced in other API calls such as <a>UpdateServiceAccessPolicies</a>.
    """
    
    arn: Optional[str] = field(default=None)
    endpoint: Optional[str] = field(default=None)
    
