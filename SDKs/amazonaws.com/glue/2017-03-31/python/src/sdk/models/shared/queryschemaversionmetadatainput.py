from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QuerySchemaVersionMetadataInput:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    metadata_list: Optional[List[MetadataKeyValuePair]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetadataList') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    schema_id: Optional[SchemaID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaId') }})
    schema_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaVersionId') }})
    schema_version_number: Optional[SchemaVersionNumber] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaVersionNumber') }})
    
