from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import remediationconfiguration


@dataclass_json
@dataclass
class PutRemediationConfigurationsRequest:
    remediation_configurations: List[remediationconfiguration.RemediationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemediationConfigurations' }})
    
