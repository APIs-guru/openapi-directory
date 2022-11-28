from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DisassociateIamInstanceProfileResult:
    iam_instance_profile_association: Optional[IamInstanceProfileAssociation] = field(default=None)
    
