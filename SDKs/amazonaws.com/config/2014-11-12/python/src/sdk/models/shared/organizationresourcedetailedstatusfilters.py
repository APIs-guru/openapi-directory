from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import organizationresourcedetailedstatus_enum


@dataclass_json
@dataclass
class OrganizationResourceDetailedStatusFilters:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    status: Optional[organizationresourcedetailedstatus_enum.OrganizationResourceDetailedStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
