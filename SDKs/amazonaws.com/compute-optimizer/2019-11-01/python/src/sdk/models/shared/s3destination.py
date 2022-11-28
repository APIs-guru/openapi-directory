from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3Destination:
    r"""S3Destination
    Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a recommendations export file, and its associated metadata file.
    """
    
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    metadata_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataKey') }})
    
