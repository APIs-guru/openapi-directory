from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GetDefaultCreditSpecificationResult:
    instance_family_credit_specification: Optional[InstanceFamilyCreditSpecification] = field(default=None)
    
