from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class IamInstanceProfileAssociation:
    r"""IamInstanceProfileAssociation
    Describes an association between an IAM instance profile and an instance.
    """
    
    association_id: Optional[str] = field(default=None)
    iam_instance_profile: Optional[IamInstanceProfile] = field(default=None)
    instance_id: Optional[str] = field(default=None)
    state: Optional[IamInstanceProfileAssociationStateEnum] = field(default=None)
    timestamp: Optional[datetime] = field(default=None)
    
