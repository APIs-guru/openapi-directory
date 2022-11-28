from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from . import *


@dataclass
class ServiceSpecificCredential:
    r"""ServiceSpecificCredential
    Contains the details of a service-specific credential.
    """
    
    create_date: datetime = field()
    service_name: str = field()
    service_password: str = field()
    service_specific_credential_id: str = field()
    service_user_name: str = field()
    status: StatusTypeEnum = field()
    user_name: str = field()
    
