from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from . import *


@dataclass
class Invalidation:
    r"""Invalidation
    An invalidation. 
    """
    
    create_time: datetime = field()
    id: str = field()
    invalidation_batch: InvalidationBatch = field()
    status: str = field()
    
