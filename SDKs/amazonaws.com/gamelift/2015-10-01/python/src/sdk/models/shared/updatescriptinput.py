from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import s3location


@dataclass_json
@dataclass
class UpdateScriptInput:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    script_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScriptId' }})
    storage_location: Optional[s3location.S3Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageLocation' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    zip_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ZipFile' }})
    
