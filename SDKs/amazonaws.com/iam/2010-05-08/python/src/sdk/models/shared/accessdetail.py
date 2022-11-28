from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class AccessDetail:
    r"""AccessDetail
    <p>An object that contains details about when a principal in the reported Organizations entity last attempted to access an Amazon Web Services service. A principal can be an IAM user, an IAM role, or the Amazon Web Services account root user within the reported Organizations entity.</p> <p>This data type is a response element in the <a>GetOrganizationsAccessReport</a> operation.</p>
    """
    
    service_name: str = field()
    service_namespace: str = field()
    entity_path: Optional[str] = field(default=None)
    last_authenticated_time: Optional[datetime] = field(default=None)
    region: Optional[str] = field(default=None)
    total_authenticated_entities: Optional[int] = field(default=None)
    
