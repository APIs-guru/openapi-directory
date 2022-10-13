from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import replicaglobalsecondaryindexdescription
from . import provisionedthroughputoverride
from . import replicastatus_enum


@dataclass_json
@dataclass
class ReplicaDescription:
    global_secondary_indexes: Optional[List[replicaglobalsecondaryindexdescription.ReplicaGlobalSecondaryIndexDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalSecondaryIndexes' }})
    kms_master_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KMSMasterKeyId' }})
    provisioned_throughput_override: Optional[provisionedthroughputoverride.ProvisionedThroughputOverride] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedThroughputOverride' }})
    region_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegionName' }})
    replica_inaccessible_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaInaccessibleDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    replica_status: Optional[replicastatus_enum.ReplicaStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaStatus' }})
    replica_status_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaStatusDescription' }})
    replica_status_percent_progress: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaStatusPercentProgress' }})
    
