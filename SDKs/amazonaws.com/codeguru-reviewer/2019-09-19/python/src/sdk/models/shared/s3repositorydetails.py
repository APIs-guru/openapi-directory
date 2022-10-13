from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import codeartifacts


@dataclass_json
@dataclass
class S3RepositoryDetails:
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BucketName' }})
    code_artifacts: Optional[codeartifacts.CodeArtifacts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeArtifacts' }})
    
