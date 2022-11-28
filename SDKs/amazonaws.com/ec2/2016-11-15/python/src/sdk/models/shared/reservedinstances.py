from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class ReservedInstances:
    r"""ReservedInstances
    Describes a Reserved Instance.
    """
    
    availability_zone: Optional[str] = field(default=None)
    currency_code: Optional[CurrencyCodeValuesEnum] = field(default=None)
    duration: Optional[int] = field(default=None)
    end: Optional[datetime] = field(default=None)
    fixed_price: Optional[float] = field(default=None)
    instance_count: Optional[int] = field(default=None)
    instance_tenancy: Optional[TenancyEnum] = field(default=None)
    instance_type: Optional[InstanceTypeEnum] = field(default=None)
    offering_class: Optional[OfferingClassTypeEnum] = field(default=None)
    offering_type: Optional[OfferingTypeValuesEnum] = field(default=None)
    product_description: Optional[RiProductDescriptionEnum] = field(default=None)
    recurring_charges: Optional[List[RecurringCharge]] = field(default=None)
    reserved_instances_id: Optional[str] = field(default=None)
    scope: Optional[ScopeEnum] = field(default=None)
    start: Optional[datetime] = field(default=None)
    state: Optional[ReservedInstanceStateEnum] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    usage_price: Optional[float] = field(default=None)
    
