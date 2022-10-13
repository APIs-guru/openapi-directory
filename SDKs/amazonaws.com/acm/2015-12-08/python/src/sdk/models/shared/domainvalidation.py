from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import resourcerecord
from . import validationmethod_enum
from . import domainstatus_enum


@dataclass_json
@dataclass
class DomainValidation:
    domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    resource_record: Optional[resourcerecord.ResourceRecord] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceRecord' }})
    validation_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationDomain' }})
    validation_emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationEmails' }})
    validation_method: Optional[validationmethod_enum.ValidationMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationMethod' }})
    validation_status: Optional[domainstatus_enum.DomainStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationStatus' }})
    
