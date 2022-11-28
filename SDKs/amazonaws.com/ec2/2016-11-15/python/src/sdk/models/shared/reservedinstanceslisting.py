from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class ReservedInstancesListing:
    r"""ReservedInstancesListing
    Describes a Reserved Instance listing.
    """
    
    client_token: Optional[str] = field(default=None)
    create_date: Optional[datetime] = field(default=None)
    instance_counts: Optional[List[InstanceCount]] = field(default=None)
    price_schedules: Optional[List[PriceSchedule]] = field(default=None)
    reserved_instances_id: Optional[str] = field(default=None)
    reserved_instances_listing_id: Optional[str] = field(default=None)
    status: Optional[ListingStatusEnum] = field(default=None)
    status_message: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    update_date: Optional[datetime] = field(default=None)
    
