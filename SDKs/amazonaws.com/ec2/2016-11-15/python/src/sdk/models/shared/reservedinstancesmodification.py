from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class ReservedInstancesModification:
    r"""ReservedInstancesModification
    Describes a Reserved Instance modification.
    """
    
    client_token: Optional[str] = field(default=None)
    create_date: Optional[datetime] = field(default=None)
    effective_date: Optional[datetime] = field(default=None)
    modification_results: Optional[List[ReservedInstancesModificationResult]] = field(default=None)
    reserved_instances_ids: Optional[List[ReservedInstancesID]] = field(default=None)
    reserved_instances_modification_id: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    status_message: Optional[str] = field(default=None)
    update_date: Optional[datetime] = field(default=None)
    
