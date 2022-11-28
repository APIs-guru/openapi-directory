from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ModifyDefaultCreditSpecificationResult:
    instance_family_credit_specification: Optional[InstanceFamilyCreditSpecification] = field(default=None)
    
