from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import directconnectgatewayattachmentstate_enum
from . import directconnectgatewayattachmenttype_enum


@dataclass_json
@dataclass
class DirectConnectGatewayAttachment:
    attachment_state: Optional[directconnectgatewayattachmentstate_enum.DirectConnectGatewayAttachmentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachmentState' }})
    attachment_type: Optional[directconnectgatewayattachmenttype_enum.DirectConnectGatewayAttachmentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachmentType' }})
    direct_connect_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directConnectGatewayId' }})
    state_change_error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateChangeError' }})
    virtual_interface_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualInterfaceId' }})
    virtual_interface_owner_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualInterfaceOwnerAccount' }})
    virtual_interface_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualInterfaceRegion' }})
    
