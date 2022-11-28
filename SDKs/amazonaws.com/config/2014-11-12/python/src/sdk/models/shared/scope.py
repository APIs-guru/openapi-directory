from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Scope:
    r"""Scope
    Defines which resources trigger an evaluation for an Config rule. The scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. Specify a scope to constrain which resources trigger an evaluation for a rule. Otherwise, evaluations for the rule are triggered when any resource in your recording group changes in configuration.
    """
    
    compliance_resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceResourceId') }})
    compliance_resource_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceResourceTypes') }})
    tag_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagKey') }})
    tag_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagValue') }})
    
