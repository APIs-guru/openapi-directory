from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BranchDiffSourceCodeType:
    destination_branch_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationBranchName' }})
    source_branch_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceBranchName' }})
    
