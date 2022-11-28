from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from . import *


@dataclass
class KeyGroup:
    r"""KeyGroup
    <p>A key group.</p> <p>A key group contains a list of public keys that you can use with <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html\">CloudFront signed URLs and signed cookies</a>.</p>
    """
    
    id: str = field()
    key_group_config: KeyGroupConfig = field()
    last_modified_time: datetime = field()
    
