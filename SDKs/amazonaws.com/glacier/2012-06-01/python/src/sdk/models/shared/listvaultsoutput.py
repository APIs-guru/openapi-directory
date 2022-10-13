from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import describevaultoutput


@dataclass_json
@dataclass
class ListVaultsOutput:
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    vault_list: Optional[List[describevaultoutput.DescribeVaultOutput]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VaultList' }})
    
