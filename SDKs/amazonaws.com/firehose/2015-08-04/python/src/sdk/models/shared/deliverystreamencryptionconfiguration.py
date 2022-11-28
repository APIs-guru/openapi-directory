from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeliveryStreamEncryptionConfiguration:
    r"""DeliveryStreamEncryptionConfiguration
    Contains information about the server-side encryption (SSE) status for the delivery stream, the type customer master key (CMK) in use, if any, and the ARN of the CMK. You can get <code>DeliveryStreamEncryptionConfiguration</code> by invoking the <a>DescribeDeliveryStream</a> operation. 
    """
    
    failure_description: Optional[FailureDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureDescription') }})
    key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyARN') }})
    key_type: Optional[KeyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyType') }})
    status: Optional[DeliveryStreamEncryptionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
