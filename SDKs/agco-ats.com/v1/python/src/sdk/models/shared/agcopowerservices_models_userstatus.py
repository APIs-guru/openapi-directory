from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AgcoPowerServicesModelsUserStatusStateEnum(str, Enum):
    ACTIVE = "Active"
    INACTIVE = "Inactive"
    NONE = "None"


@dataclass_json
@dataclass
class AgcoPowerServicesModelsUserStatus:
    r"""AgcoPowerServicesModelsUserStatus
    Status of a voucher in the AGCO Power system
    """
    
    dealer_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DealerCode') }, 'form': { 'field_name': 'DealerCode' }})
    voucher_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VoucherCode') }, 'form': { 'field_name': 'VoucherCode' }})
    state: Optional[AgcoPowerServicesModelsUserStatusStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }, 'form': { 'field_name': 'State' }})
    
