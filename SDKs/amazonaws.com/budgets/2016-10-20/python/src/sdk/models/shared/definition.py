from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import iamactiondefinition
from . import scpactiondefinition
from . import ssmactiondefinition


@dataclass_json
@dataclass
class Definition:
    iam_action_definition: Optional[iamactiondefinition.IamActionDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IamActionDefinition' }})
    scp_action_definition: Optional[scpactiondefinition.ScpActionDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScpActionDefinition' }})
    ssm_action_definition: Optional[ssmactiondefinition.SsmActionDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SsmActionDefinition' }})
    
