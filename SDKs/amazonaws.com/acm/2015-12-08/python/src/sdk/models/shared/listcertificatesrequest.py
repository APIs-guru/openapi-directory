from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import certificatestatus_enum
from . import filters


@dataclass_json
@dataclass
class ListCertificatesRequest:
    certificate_statuses: Optional[List[certificatestatus_enum.CertificateStatusEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateStatuses' }})
    includes: Optional[filters.Filters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Includes' }})
    max_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxItems' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
