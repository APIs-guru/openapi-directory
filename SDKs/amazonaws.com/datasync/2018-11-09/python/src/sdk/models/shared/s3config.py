from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3Config:
    r"""S3Config
    <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that is used to access an Amazon S3 bucket.</p> <p>For detailed information about using such a role, see Creating a Location for Amazon S3 in the <i>DataSync User Guide</i>.</p>
    """
    
    bucket_access_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketAccessRoleArn') }})
    
