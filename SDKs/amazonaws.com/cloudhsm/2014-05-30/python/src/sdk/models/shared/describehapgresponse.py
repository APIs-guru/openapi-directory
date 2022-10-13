from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import cloudhsmobjectstate_enum


@dataclass_json
@dataclass
class DescribeHapgResponse:
    hapg_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HapgArn' }})
    hapg_serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HapgSerial' }})
    hsms_last_action_failed: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HsmsLastActionFailed' }})
    hsms_pending_deletion: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HsmsPendingDeletion' }})
    hsms_pending_registration: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HsmsPendingRegistration' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Label' }})
    last_modified_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTimestamp' }})
    partition_serial_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartitionSerialList' }})
    state: Optional[cloudhsmobjectstate_enum.CloudHsmObjectStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
