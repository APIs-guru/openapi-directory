from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Cluster:
    r"""Cluster
    Contains information about an AWS CloudHSM cluster.
    """
    
    backup_policy: Optional[BackupPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupPolicy') }})
    backup_retention_policy: Optional[BackupRetentionPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupRetentionPolicy') }})
    certificates: Optional[Certificates] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Certificates') }})
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterId') }})
    create_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hsm_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HsmType') }})
    hsms: Optional[List[Hsm]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Hsms') }})
    pre_co_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreCoPassword') }})
    security_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroup') }})
    source_backup_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceBackupId') }})
    state: Optional[ClusterStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    state_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StateMessage') }})
    subnet_mapping: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetMapping') }})
    tag_list: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagList') }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    
