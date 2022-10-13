from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import attributedefinition
from . import billingmode_enum
from . import globalsecondaryindex
from . import keyschemaelement
from . import localsecondaryindex
from . import provisionedthroughput
from . import ssespecification
from . import streamspecification
from . import tag


@dataclass_json
@dataclass
class CreateTableInput:
    attribute_definitions: List[attributedefinition.AttributeDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeDefinitions' }})
    billing_mode: Optional[billingmode_enum.BillingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BillingMode' }})
    global_secondary_indexes: Optional[List[globalsecondaryindex.GlobalSecondaryIndex]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalSecondaryIndexes' }})
    key_schema: List[keyschemaelement.KeySchemaElement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeySchema' }})
    local_secondary_indexes: Optional[List[localsecondaryindex.LocalSecondaryIndex]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalSecondaryIndexes' }})
    provisioned_throughput: Optional[provisionedthroughput.ProvisionedThroughput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedThroughput' }})
    sse_specification: Optional[ssespecification.SseSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SSESpecification' }})
    stream_specification: Optional[streamspecification.StreamSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamSpecification' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
