from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import metadatainfo


@dataclass_json
@dataclass
class QuerySchemaVersionMetadataResponse:
    metadata_info_map: Optional[dict[str, metadatainfo.MetadataInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetadataInfoMap' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    schema_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaVersionId' }})
    
