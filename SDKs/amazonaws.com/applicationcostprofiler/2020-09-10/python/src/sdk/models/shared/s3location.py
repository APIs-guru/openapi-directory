from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3Location:
    r"""S3Location
    Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.
    """
    
    bucket: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket') }})
    prefix: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    
