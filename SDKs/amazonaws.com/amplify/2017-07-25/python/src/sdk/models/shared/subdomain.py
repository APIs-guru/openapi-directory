from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import subdomainsetting


@dataclass_json
@dataclass
class SubDomain:
    dns_record: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dnsRecord' }})
    sub_domain_setting: subdomainsetting.SubDomainSetting = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subDomainSetting' }})
    verified: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verified' }})
    
