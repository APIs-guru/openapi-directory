from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ModifyInstanceCreditSpecificationResult:
    successful_instance_credit_specifications: Optional[List[SuccessfulInstanceCreditSpecificationItem]] = field(default=None)
    unsuccessful_instance_credit_specifications: Optional[List[UnsuccessfulInstanceCreditSpecificationItem]] = field(default=None)
    
