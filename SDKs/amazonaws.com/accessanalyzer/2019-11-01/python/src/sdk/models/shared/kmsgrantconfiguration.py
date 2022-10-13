from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import kmsgrantconstraints
from . import kmsgrantoperation_enum


@dataclass_json
@dataclass
class KmsGrantConfiguration:
    constraints: Optional[kmsgrantconstraints.KmsGrantConstraints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'constraints' }})
    grantee_principal: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'granteePrincipal' }})
    issuing_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuingAccount' }})
    operations: List[kmsgrantoperation_enum.KmsGrantOperationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operations' }})
    retiring_principal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retiringPrincipal' }})
    
