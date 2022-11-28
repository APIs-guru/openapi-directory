from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclass
class AccessKeyLastUsed:
    r"""AccessKeyLastUsed
    <p>Contains information about the last time an Amazon Web Services access key was used since IAM began tracking this information on April 22, 2015.</p> <p>This data type is used as a response element in the <a>GetAccessKeyLastUsed</a> operation.</p>
    """
    
    last_used_date: datetime = field()
    region: str = field()
    service_name: str = field()
    
