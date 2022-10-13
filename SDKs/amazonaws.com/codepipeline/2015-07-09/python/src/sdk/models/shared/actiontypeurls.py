from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ActionTypeUrls:
    configuration_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationUrl' }})
    entity_url_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityUrlTemplate' }})
    execution_url_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionUrlTemplate' }})
    revision_url_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionUrlTemplate' }})
    
