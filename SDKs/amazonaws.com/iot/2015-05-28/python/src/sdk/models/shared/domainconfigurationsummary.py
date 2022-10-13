from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import servicetype_enum


@dataclass_json
@dataclass
class DomainConfigurationSummary:
    domain_configuration_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainConfigurationArn' }})
    domain_configuration_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainConfigurationName' }})
    service_type: Optional[servicetype_enum.ServiceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceType' }})
    
