from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceRecord:
    r"""ResourceRecord
    Contains a DNS record value that you can use to validate ownership or control of a domain. This is used by the <a>DescribeCertificate</a> action. 
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    type: RecordTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
