from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomDomain:
    r"""CustomDomain
    Describes a custom domain that's associated with an AWS App Runner service.
    """
    
    domain_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    enable_www_subdomain: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableWWWSubdomain') }})
    status: CustomDomainAssociationStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    certificate_validation_records: Optional[List[CertificateValidationRecord]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateValidationRecords') }})
    
