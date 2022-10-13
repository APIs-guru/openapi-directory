from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import riskconfigurationtype


@dataclass_json
@dataclass
class DescribeRiskConfigurationResponse:
    risk_configuration: riskconfigurationtype.RiskConfigurationType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RiskConfiguration' }})
    
