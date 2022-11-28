from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GeneralName:
    r"""GeneralName
    Describes an ASN.1 X.400 <code>GeneralName</code> as defined in <a href=\"https://tools.ietf.org/html/rfc5280\">RFC 5280</a>. Only one of the following naming options should be provided. Providing more than one option results in an <code>InvalidArgsException</code> error.
    """
    
    directory_name: Optional[Asn1Subject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryName') }})
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsName') }})
    edi_party_name: Optional[EdiPartyName] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EdiPartyName') }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddress') }})
    other_name: Optional[OtherName] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherName') }})
    registered_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegisteredId') }})
    rfc822_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rfc822Name') }})
    uniform_resource_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UniformResourceIdentifier') }})
    
