from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SelfManagedActiveDirectoryConfigurationUpdates:
    r"""SelfManagedActiveDirectoryConfigurationUpdates
    The configuration that Amazon FSx uses to join the Windows File Server instance to a self-managed Microsoft Active Directory (AD) directory.
    """
    
    dns_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsIps') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    
