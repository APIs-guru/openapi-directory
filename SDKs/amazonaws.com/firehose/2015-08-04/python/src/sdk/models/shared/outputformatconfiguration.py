from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OutputFormatConfiguration:
    r"""OutputFormatConfiguration
    Specifies the serializer that you want Kinesis Data Firehose to use to convert the format of your data before it writes it to Amazon S3. This parameter is required if <code>Enabled</code> is set to true.
    """
    
    serializer: Optional[Serializer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Serializer') }})
    
