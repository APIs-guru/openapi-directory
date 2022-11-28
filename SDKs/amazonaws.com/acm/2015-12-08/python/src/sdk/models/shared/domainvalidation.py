from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DomainValidation:
    r"""DomainValidation
    Contains information about the validation of each domain name in the certificate.
    """
    
    domain_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    resource_record: Optional[ResourceRecord] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceRecord') }})
    validation_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationDomain') }})
    validation_emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationEmails') }})
    validation_method: Optional[ValidationMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationMethod') }})
    validation_status: Optional[DomainStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationStatus') }})
    
