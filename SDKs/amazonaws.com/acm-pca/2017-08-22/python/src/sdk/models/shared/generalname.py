from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import asn1subject
from . import edipartyname
from . import othername


@dataclass_json
@dataclass
class GeneralName:
    directory_name: Optional[asn1subject.Asn1Subject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryName' }})
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsName' }})
    edi_party_name: Optional[edipartyname.EdiPartyName] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EdiPartyName' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpAddress' }})
    other_name: Optional[othername.OtherName] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherName' }})
    registered_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegisteredId' }})
    rfc822_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rfc822Name' }})
    uniform_resource_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UniformResourceIdentifier' }})
    
