from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeHapgResponse:
    r"""DescribeHapgResponse
    Contains the output of the <a>DescribeHapg</a> action.
    """
    
    hapg_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HapgArn') }})
    hapg_serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HapgSerial') }})
    hsms_last_action_failed: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HsmsLastActionFailed') }})
    hsms_pending_deletion: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HsmsPendingDeletion') }})
    hsms_pending_registration: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HsmsPendingRegistration') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Label') }})
    last_modified_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTimestamp') }})
    partition_serial_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionSerialList') }})
    state: Optional[CloudHsmObjectStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    
