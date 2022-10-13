from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import directconnectgatewayattachment


@dataclass_json
@dataclass
class DescribeDirectConnectGatewayAttachmentsResult:
    direct_connect_gateway_attachments: Optional[List[directconnectgatewayattachment.DirectConnectGatewayAttachment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directConnectGatewayAttachments' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
