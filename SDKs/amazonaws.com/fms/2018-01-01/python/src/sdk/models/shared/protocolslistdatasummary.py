from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProtocolsListDataSummary:
    list_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListArn' }})
    list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListId' }})
    list_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListName' }})
    protocols_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProtocolsList' }})
    
