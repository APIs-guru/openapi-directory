from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import backuppolicy_enum
from . import backupretentionpolicy
from . import certificates
from . import hsm
from . import clusterstate_enum
from . import tag


@dataclass_json
@dataclass
class Cluster:
    backup_policy: Optional[backuppolicy_enum.BackupPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupPolicy' }})
    backup_retention_policy: Optional[backupretentionpolicy.BackupRetentionPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupRetentionPolicy' }})
    certificates: Optional[certificates.Certificates] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Certificates' }})
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterId' }})
    create_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hsm_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HsmType' }})
    hsms: Optional[List[hsm.Hsm]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Hsms' }})
    pre_co_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreCoPassword' }})
    security_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroup' }})
    source_backup_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceBackupId' }})
    state: Optional[clusterstate_enum.ClusterStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    state_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StateMessage' }})
    subnet_mapping: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetMapping' }})
    tag_list: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagList' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
