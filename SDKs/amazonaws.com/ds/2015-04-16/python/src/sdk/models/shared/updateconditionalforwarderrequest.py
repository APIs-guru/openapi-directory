from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateConditionalForwarderRequest:
    r"""UpdateConditionalForwarderRequest
    Updates a conditional forwarder.
    """
    
    directory_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    dns_ip_addrs: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsIpAddrs') }})
    remote_domain_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoteDomainName') }})
    
