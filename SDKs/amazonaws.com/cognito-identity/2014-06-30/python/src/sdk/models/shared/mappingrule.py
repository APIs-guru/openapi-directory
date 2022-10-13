from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import mappingrulematchtype_enum


@dataclass_json
@dataclass
class MappingRule:
    claim: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Claim' }})
    match_type: mappingrulematchtype_enum.MappingRuleMatchTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MatchType' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleARN' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
