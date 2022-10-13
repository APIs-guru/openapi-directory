from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import policyqualifierid_enum
from . import qualifier


@dataclass_json
@dataclass
class PolicyQualifierInfo:
    policy_qualifier_id: policyqualifierid_enum.PolicyQualifierIDEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyQualifierId' }})
    qualifier: qualifier.Qualifier = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Qualifier' }})
    
