from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PurchaseReservedInstancesOfferingResult:
    r"""PurchaseReservedInstancesOfferingResult
    Contains the output of PurchaseReservedInstancesOffering.
    """
    
    reserved_instances_id: Optional[str] = field(default=None)
    
