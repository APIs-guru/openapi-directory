from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SchemaFacet:
    facet_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FacetName' }})
    schema_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaArn' }})
    
