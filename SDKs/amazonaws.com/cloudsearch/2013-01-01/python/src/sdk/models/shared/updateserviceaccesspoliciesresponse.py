from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from . import *


@dataclass
class UpdateServiceAccessPoliciesResponse:
    r"""UpdateServiceAccessPoliciesResponse
    The result of an <code>UpdateServiceAccessPolicies</code> request. Contains the new access policies.
    """
    
    access_policies: AccessPoliciesStatus = field()
    
