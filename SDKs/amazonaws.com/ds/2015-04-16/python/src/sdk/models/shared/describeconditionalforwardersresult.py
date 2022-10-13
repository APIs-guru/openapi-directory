from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import conditionalforwarder


@dataclass_json
@dataclass
class DescribeConditionalForwardersResult:
    conditional_forwarders: Optional[List[conditionalforwarder.ConditionalForwarder]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConditionalForwarders' }})
    
