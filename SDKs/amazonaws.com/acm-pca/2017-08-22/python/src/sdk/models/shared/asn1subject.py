from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Asn1Subject:
    common_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CommonName' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }})
    distinguished_name_qualifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DistinguishedNameQualifier' }})
    generation_qualifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GenerationQualifier' }})
    given_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GivenName' }})
    initials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Initials' }})
    locality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Locality' }})
    organization: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Organization' }})
    organizational_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationalUnit' }})
    pseudonym: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Pseudonym' }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SerialNumber' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    surname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Surname' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    
