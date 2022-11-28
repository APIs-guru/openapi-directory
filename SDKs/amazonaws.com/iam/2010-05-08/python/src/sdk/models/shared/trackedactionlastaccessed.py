from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class TrackedActionLastAccessed:
    r"""TrackedActionLastAccessed
    <p>Contains details about the most recent attempt to access an action within the service.</p> <p>This data type is used as a response element in the <a>GetServiceLastAccessedDetails</a> operation.</p>
    """
    
    action_name: Optional[str] = field(default=None)
    last_accessed_entity: Optional[str] = field(default=None)
    last_accessed_region: Optional[str] = field(default=None)
    last_accessed_time: Optional[datetime] = field(default=None)
    
