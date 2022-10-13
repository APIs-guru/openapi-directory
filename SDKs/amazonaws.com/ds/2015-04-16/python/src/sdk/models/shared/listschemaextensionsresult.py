from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import schemaextensioninfo


@dataclass_json
@dataclass
class ListSchemaExtensionsResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    schema_extensions_info: Optional[List[schemaextensioninfo.SchemaExtensionInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaExtensionsInfo' }})
    
