from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import certificatevalidationrecord
from . import customdomainassociationstatus_enum


@dataclass_json
@dataclass
class CustomDomain:
    certificate_validation_records: Optional[List[certificatevalidationrecord.CertificateValidationRecord]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateValidationRecords' }})
    domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    enable_www_subdomain: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableWWWSubdomain' }})
    status: customdomainassociationstatus_enum.CustomDomainAssociationStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
