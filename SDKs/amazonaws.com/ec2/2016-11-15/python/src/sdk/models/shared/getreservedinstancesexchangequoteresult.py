from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class GetReservedInstancesExchangeQuoteResult:
    r"""GetReservedInstancesExchangeQuoteResult
    Contains the output of GetReservedInstancesExchangeQuote.
    """
    
    currency_code: Optional[str] = field(default=None)
    is_valid_exchange: Optional[bool] = field(default=None)
    output_reserved_instances_will_expire_at: Optional[datetime] = field(default=None)
    payment_due: Optional[str] = field(default=None)
    reserved_instance_value_rollup: Optional[ReservationValue] = field(default=None)
    reserved_instance_value_set: Optional[List[ReservedInstanceReservationValue]] = field(default=None)
    target_configuration_value_rollup: Optional[ReservationValue] = field(default=None)
    target_configuration_value_set: Optional[List[TargetReservationValue]] = field(default=None)
    validation_failure_reason: Optional[str] = field(default=None)
    
