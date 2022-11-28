from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class S3BucketACLGrantConfiguration:
    r"""S3BucketACLGrantConfiguration
    A proposed access control list grant configuration for an Amazon S3 bucket. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#setting-acls\">How to Specify an ACL</a>.
    """
    
    grantee: ACLGrantee = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('grantee') }})
    permission: ACLPermissionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    
