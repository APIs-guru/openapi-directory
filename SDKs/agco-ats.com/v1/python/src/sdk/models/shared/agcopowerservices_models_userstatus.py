from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AgcoPowerServicesModelsUserStatusStateEnum(str, Enum):
    ACTIVE = "Active"
    INACTIVE = "Inactive"
    NONE = "None"


@dataclass_json
@dataclass
class AgcoPowerServicesModelsUserStatus:
    dealer_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DealerCode' }, 'form': { 'field_name': 'DealerCode' }})
    state: Optional[AgcoPowerServicesModelsUserStatusStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }, 'form': { 'field_name': 'State' }})
    voucher_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VoucherCode' }, 'form': { 'field_name': 'VoucherCode' }})
    
