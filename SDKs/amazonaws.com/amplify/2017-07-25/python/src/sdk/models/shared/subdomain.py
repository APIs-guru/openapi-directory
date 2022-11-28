from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SubDomain:
    r"""SubDomain
     The subdomain for the domain association. 
    """
    
    dns_record: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsRecord') }})
    sub_domain_setting: SubDomainSetting = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subDomainSetting') }})
    verified: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verified') }})
    
