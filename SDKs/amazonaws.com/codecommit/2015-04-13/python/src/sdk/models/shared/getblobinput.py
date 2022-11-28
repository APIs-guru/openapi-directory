from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetBlobInput:
    r"""GetBlobInput
    Represents the input of a get blob operation.
    """
    
    blob_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobId') }})
    repository_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    
