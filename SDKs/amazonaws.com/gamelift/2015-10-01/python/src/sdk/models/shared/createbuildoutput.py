from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import build
from . import s3location
from . import awscredentials


@dataclass_json
@dataclass
class CreateBuildOutput:
    build: Optional[build.Build] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Build' }})
    storage_location: Optional[s3location.S3Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageLocation' }})
    upload_credentials: Optional[awscredentials.AwsCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UploadCredentials' }})
    
