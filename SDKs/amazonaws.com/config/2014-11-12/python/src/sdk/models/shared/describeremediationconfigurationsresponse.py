from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import remediationconfiguration


@dataclass_json
@dataclass
class DescribeRemediationConfigurationsResponse:
    remediation_configurations: Optional[List[remediationconfiguration.RemediationConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemediationConfigurations' }})
    
