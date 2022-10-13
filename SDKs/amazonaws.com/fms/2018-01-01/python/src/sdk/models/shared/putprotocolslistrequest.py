from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import protocolslistdata
from . import tag


@dataclass_json
@dataclass
class PutProtocolsListRequest:
    protocols_list: protocolslistdata.ProtocolsListData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProtocolsList' }})
    tag_list: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagList' }})
    
