from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import protocolslistdata


@dataclass_json
@dataclass
class PutProtocolsListResponse:
    protocols_list: Optional[protocolslistdata.ProtocolsListData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProtocolsList' }})
    protocols_list_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProtocolsListArn' }})
    
