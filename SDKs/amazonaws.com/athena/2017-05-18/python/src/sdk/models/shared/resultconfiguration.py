from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResultConfiguration:
    r"""ResultConfiguration
    The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results. These are known as \"client-side settings\". If workgroup settings override client-side settings, then the query uses the workgroup settings.
    """
    
    encryption_configuration: Optional[EncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionConfiguration') }})
    output_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputLocation') }})
    
