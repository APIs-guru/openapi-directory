from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QuerySchemaVersionMetadataResponse:
    metadata_info_map: Optional[dict[str, MetadataInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetadataInfoMap') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    schema_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaVersionId') }})
    
