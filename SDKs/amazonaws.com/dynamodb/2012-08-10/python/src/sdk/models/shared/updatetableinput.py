from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import attributedefinition
from . import billingmode_enum
from . import globalsecondaryindexupdate
from . import provisionedthroughput
from . import replicationgroupupdate
from . import ssespecification
from . import streamspecification


@dataclass_json
@dataclass
class UpdateTableInput:
    attribute_definitions: Optional[List[attributedefinition.AttributeDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeDefinitions' }})
    billing_mode: Optional[billingmode_enum.BillingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BillingMode' }})
    global_secondary_index_updates: Optional[List[globalsecondaryindexupdate.GlobalSecondaryIndexUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalSecondaryIndexUpdates' }})
    provisioned_throughput: Optional[provisionedthroughput.ProvisionedThroughput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedThroughput' }})
    replica_updates: Optional[List[replicationgroupupdate.ReplicationGroupUpdate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaUpdates' }})
    sse_specification: Optional[ssespecification.SseSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SSESpecification' }})
    stream_specification: Optional[streamspecification.StreamSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamSpecification' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
