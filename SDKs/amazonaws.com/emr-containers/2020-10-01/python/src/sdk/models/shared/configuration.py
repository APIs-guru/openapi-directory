from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Configuration:
    r"""Configuration
    A configuration specification to be used when provisioning virtual clusters, which can include configurations for applications and software bundled with Amazon EMR on EKS. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file.
    """
    
    classification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    configurations: Optional[List[Configuration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurations') }})
    properties: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    
