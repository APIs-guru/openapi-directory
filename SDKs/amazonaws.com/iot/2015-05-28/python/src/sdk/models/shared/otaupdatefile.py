from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import codesigning
from . import filelocation


@dataclass_json
@dataclass
class OtaUpdateFile:
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    code_signing: Optional[codesigning.CodeSigning] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codeSigning' }})
    file_location: Optional[filelocation.FileLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileLocation' }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileName' }})
    file_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileType' }})
    file_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileVersion' }})
    
