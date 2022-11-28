from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DirectConnectGatewayAttachment:
    r"""DirectConnectGatewayAttachment
    Information about an attachment between a Direct Connect gateway and a virtual interface.
    """
    
    attachment_state: Optional[DirectConnectGatewayAttachmentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachmentState') }})
    attachment_type: Optional[DirectConnectGatewayAttachmentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachmentType') }})
    direct_connect_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayId') }})
    state_change_error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateChangeError') }})
    virtual_interface_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualInterfaceId') }})
    virtual_interface_owner_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualInterfaceOwnerAccount') }})
    virtual_interface_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualInterfaceRegion') }})
    
