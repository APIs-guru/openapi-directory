from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class EntityDetails:
    r"""EntityDetails
    <p>An object that contains details about when the IAM entities (users or roles) were last used in an attempt to access the specified Amazon Web Services service.</p> <p>This data type is a response element in the <a>GetServiceLastAccessedDetailsWithEntities</a> operation.</p>
    """
    
    entity_info: EntityInfo = field()
    last_authenticated: Optional[datetime] = field(default=None)
    
