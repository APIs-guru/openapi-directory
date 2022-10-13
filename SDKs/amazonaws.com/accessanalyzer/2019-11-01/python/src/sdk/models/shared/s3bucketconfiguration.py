from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import s3accesspointconfiguration
from . import s3bucketaclgrantconfiguration
from . import s3publicaccessblockconfiguration


@dataclass_json
@dataclass
class S3BucketConfiguration:
    access_points: Optional[dict[str, s3accesspointconfiguration.S3AccessPointConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessPoints' }})
    bucket_acl_grants: Optional[List[s3bucketaclgrantconfiguration.S3BucketACLGrantConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketAclGrants' }})
    bucket_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketPolicy' }})
    bucket_public_access_block: Optional[s3publicaccessblockconfiguration.S3PublicAccessBlockConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketPublicAccessBlock' }})
    
