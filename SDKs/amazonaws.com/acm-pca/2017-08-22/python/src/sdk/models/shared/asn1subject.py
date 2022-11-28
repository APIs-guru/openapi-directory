from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Asn1Subject:
    r"""Asn1Subject
    Contains information about the certificate subject. The <code>Subject</code> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <code>Subject </code>must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.
    """
    
    common_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CommonName') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Country') }})
    distinguished_name_qualifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DistinguishedNameQualifier') }})
    generation_qualifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GenerationQualifier') }})
    given_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GivenName') }})
    initials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Initials') }})
    locality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Locality') }})
    organization: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Organization') }})
    organizational_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationalUnit') }})
    pseudonym: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pseudonym') }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SerialNumber') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    surname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Surname') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    
