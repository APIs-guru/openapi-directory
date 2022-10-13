from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import s3location
from . import tag


@dataclass_json
@dataclass
class CreateScriptInput:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    storage_location: Optional[s3location.S3Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageLocation' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    zip_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ZipFile' }})
    
