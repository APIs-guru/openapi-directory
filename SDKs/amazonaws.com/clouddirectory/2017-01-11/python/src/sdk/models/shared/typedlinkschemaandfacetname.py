from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TypedLinkSchemaAndFacetName:
    schema_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaArn' }})
    typed_link_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TypedLinkName' }})
    
