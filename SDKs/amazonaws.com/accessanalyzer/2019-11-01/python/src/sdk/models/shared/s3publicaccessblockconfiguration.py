from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3PublicAccessBlockConfiguration:
    r"""S3PublicAccessBlockConfiguration
    The <code>PublicAccessBlock</code> configuration to apply to this Amazon S3 bucket. If the proposed configuration is for an existing Amazon S3 bucket and the configuration is not specified, the access preview uses the existing setting. If the proposed configuration is for a new bucket and the configuration is not specified, the access preview uses <code>false</code>. If the proposed configuration is for a new access point or multi-region access point and the access point BPA configuration is not specified, the access preview uses <code>true</code>. For more information, see <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-publicaccessblockconfiguration.html\">PublicAccessBlockConfiguration</a>. 
    """
    
    ignore_public_acls: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignorePublicAcls') }})
    restrict_public_buckets: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictPublicBuckets') }})
    
