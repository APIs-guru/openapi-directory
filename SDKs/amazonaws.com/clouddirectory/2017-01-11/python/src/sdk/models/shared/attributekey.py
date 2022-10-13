from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AttributeKey:
    facet_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FacetName' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    schema_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaArn' }})
    
