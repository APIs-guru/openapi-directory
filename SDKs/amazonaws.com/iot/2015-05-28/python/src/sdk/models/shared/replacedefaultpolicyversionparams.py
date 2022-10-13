from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import policytemplatename_enum


@dataclass_json
@dataclass
class ReplaceDefaultPolicyVersionParams:
    template_name: policytemplatename_enum.PolicyTemplateNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateName' }})
    
