from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import vaultaccesspolicy


@dataclass_json
@dataclass
class GetVaultAccessPolicyOutput:
    policy: Optional[vaultaccesspolicy.VaultAccessPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    
