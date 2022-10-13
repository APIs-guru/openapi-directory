from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import domainconfigurationsummary


@dataclass_json
@dataclass
class ListDomainConfigurationsResponse:
    domain_configurations: Optional[List[domainconfigurationsummary.DomainConfigurationSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainConfigurations' }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextMarker' }})
    
