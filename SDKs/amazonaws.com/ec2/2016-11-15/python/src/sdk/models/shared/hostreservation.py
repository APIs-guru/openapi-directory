from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class HostReservation:
    r"""HostReservation
    Details about the Dedicated Host Reservation and associated Dedicated Hosts.
    """
    
    count: Optional[int] = field(default=None)
    currency_code: Optional[CurrencyCodeValuesEnum] = field(default=None)
    duration: Optional[int] = field(default=None)
    end: Optional[datetime] = field(default=None)
    host_id_set: Optional[List[str]] = field(default=None)
    host_reservation_id: Optional[str] = field(default=None)
    hourly_price: Optional[str] = field(default=None)
    instance_family: Optional[str] = field(default=None)
    offering_id: Optional[str] = field(default=None)
    payment_option: Optional[PaymentOptionEnum] = field(default=None)
    start: Optional[datetime] = field(default=None)
    state: Optional[ReservationStateEnum] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    upfront_price: Optional[str] = field(default=None)
    
