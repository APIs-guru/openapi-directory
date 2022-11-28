from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class ServiceLastAccessed:
    r"""ServiceLastAccessed
    <p>Contains details about the most recent attempt to access the service.</p> <p>This data type is used as a response element in the <a>GetServiceLastAccessedDetails</a> operation.</p>
    """
    
    service_name: str = field()
    service_namespace: str = field()
    last_authenticated: Optional[datetime] = field(default=None)
    last_authenticated_entity: Optional[str] = field(default=None)
    last_authenticated_region: Optional[str] = field(default=None)
    total_authenticated_entities: Optional[int] = field(default=None)
    tracked_actions_last_accessed: Optional[List[TrackedActionLastAccessed]] = field(default=None)
    
