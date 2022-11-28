from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ArtifactStore:
    r"""ArtifactStore
    <p>The S3 bucket where artifacts for the pipeline are stored.</p> <note> <p>You must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note>
    """
    
    location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    type: ArtifactStoreTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    encryption_key: Optional[EncryptionKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionKey') }})
    
