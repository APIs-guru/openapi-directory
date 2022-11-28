from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3ArtifactLocation:
    r"""S3ArtifactLocation
    The location of the S3 bucket that contains a revision.
    """
    
    bucket_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    object_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectKey') }})
    
