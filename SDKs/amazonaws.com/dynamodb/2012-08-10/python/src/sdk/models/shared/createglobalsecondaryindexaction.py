from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import keyschemaelement
from . import projection
from . import provisionedthroughput


@dataclass_json
@dataclass
class CreateGlobalSecondaryIndexAction:
    index_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexName' }})
    key_schema: List[keyschemaelement.KeySchemaElement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeySchema' }})
    projection: projection.Projection = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Projection' }})
    provisioned_throughput: Optional[provisionedthroughput.ProvisionedThroughput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedThroughput' }})
    
