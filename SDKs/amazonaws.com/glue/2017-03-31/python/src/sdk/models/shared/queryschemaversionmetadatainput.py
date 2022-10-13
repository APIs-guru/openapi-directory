from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metadatakeyvaluepair
from . import schemaid
from . import schemaversionnumber


@dataclass_json
@dataclass
class QuerySchemaVersionMetadataInput:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    metadata_list: Optional[List[metadatakeyvaluepair.MetadataKeyValuePair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetadataList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    schema_id: Optional[schemaid.SchemaID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaId' }})
    schema_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaVersionId' }})
    schema_version_number: Optional[schemaversionnumber.SchemaVersionNumber] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaVersionNumber' }})
    
