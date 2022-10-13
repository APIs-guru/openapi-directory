from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import maximumexecutionfrequency_enum


@dataclass_json
@dataclass
class OrganizationManagedRuleMetadata:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    input_parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputParameters' }})
    maximum_execution_frequency: Optional[maximumexecutionfrequency_enum.MaximumExecutionFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumExecutionFrequency' }})
    resource_id_scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceIdScope' }})
    resource_types_scope: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceTypesScope' }})
    rule_identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleIdentifier' }})
    tag_key_scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagKeyScope' }})
    tag_value_scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagValueScope' }})
    
