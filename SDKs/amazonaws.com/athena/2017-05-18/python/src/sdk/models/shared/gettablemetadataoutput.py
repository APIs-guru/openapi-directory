from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tablemetadata


@dataclass_json
@dataclass
class GetTableMetadataOutput:
    table_metadata: Optional[tablemetadata.TableMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableMetadata' }})
    
