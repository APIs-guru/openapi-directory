from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProviderUserIdentifierType:
    provider_attribute_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderAttributeName' }})
    provider_attribute_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderAttributeValue' }})
    provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderName' }})
    
