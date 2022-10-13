from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import blobmetadata
from . import blobmetadata
from . import changetypeenum_enum


@dataclass_json
@dataclass
class Difference:
    after_blob: Optional[blobmetadata.BlobMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'afterBlob' }})
    before_blob: Optional[blobmetadata.BlobMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beforeBlob' }})
    change_type: Optional[changetypeenum_enum.ChangeTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changeType' }})
    
