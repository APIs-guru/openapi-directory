from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImportLabelsTaskRunProperties:
    r"""ImportLabelsTaskRunProperties
    Specifies configuration properties for an importing labels task run.
    """
    
    input_s3_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputS3Path') }})
    replace: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Replace') }})
    
