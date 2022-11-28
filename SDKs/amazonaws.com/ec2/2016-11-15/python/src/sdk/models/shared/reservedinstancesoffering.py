from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class ReservedInstancesOffering:
    r"""ReservedInstancesOffering
    Describes a Reserved Instance offering.
    """
    
    availability_zone: Optional[str] = field(default=None)
    currency_code: Optional[CurrencyCodeValuesEnum] = field(default=None)
    duration: Optional[int] = field(default=None)
    fixed_price: Optional[float] = field(default=None)
    instance_tenancy: Optional[TenancyEnum] = field(default=None)
    instance_type: Optional[InstanceTypeEnum] = field(default=None)
    marketplace: Optional[bool] = field(default=None)
    offering_class: Optional[OfferingClassTypeEnum] = field(default=None)
    offering_type: Optional[OfferingTypeValuesEnum] = field(default=None)
    pricing_details: Optional[List[PricingDetail]] = field(default=None)
    product_description: Optional[RiProductDescriptionEnum] = field(default=None)
    recurring_charges: Optional[List[RecurringCharge]] = field(default=None)
    reserved_instances_offering_id: Optional[str] = field(default=None)
    scope: Optional[ScopeEnum] = field(default=None)
    usage_price: Optional[float] = field(default=None)
    
