from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeVaultOutput:
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate' }})
    last_inventory_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastInventoryDate' }})
    number_of_archives: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfArchives' }})
    size_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SizeInBytes' }})
    vault_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VaultARN' }})
    vault_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VaultName' }})
    
