from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchAlarmActionErrorEntry:
    r"""BatchAlarmActionErrorEntry
    <p>Contains error messages associated with one of the following requests:</p> <ul> <li> <p> <a href=\"https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchAcknowledgeAlarm.html\">BatchAcknowledgeAlarm</a> </p> </li> <li> <p> <a href=\"https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchDisableAlarm.html\">BatchDisableAlarm</a> </p> </li> <li> <p> <a href=\"https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchEnableAlarm.html\">BatchEnableAlarm</a> </p> </li> <li> <p> <a href=\"https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchResetAlarm.html\">BatchResetAlarm</a> </p> </li> <li> <p> <a href=\"https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchSnoozeAlarm.html\">BatchSnoozeAlarm</a> </p> </li> </ul>
    """
    
    error_code: Optional[ErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
