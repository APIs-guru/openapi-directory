from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import s3repositorydetails


@dataclass_json
@dataclass
class S3BucketRepository:
    details: Optional[s3repositorydetails.S3RepositoryDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Details' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
