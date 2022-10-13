from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class S3PublicAccessBlockConfiguration:
    ignore_public_acls: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignorePublicAcls' }})
    restrict_public_buckets: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictPublicBuckets' }})
    
