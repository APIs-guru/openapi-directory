from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from . import *


@dataclass
class UpdateServiceAccessPoliciesResponse:
    r"""UpdateServiceAccessPoliciesResponse
    A response message that contains the status of updated access policies.
    """
    
    access_policies: AccessPoliciesStatus = field()
    
