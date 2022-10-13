from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import aclgrantee
from . import aclpermission_enum


@dataclass_json
@dataclass
class S3BucketACLGrantConfiguration:
    grantee: aclgrantee.ACLGrantee = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grantee' }})
    permission: aclpermission_enum.ACLPermissionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    
