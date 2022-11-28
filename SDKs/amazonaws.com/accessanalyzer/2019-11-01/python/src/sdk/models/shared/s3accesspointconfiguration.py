from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class S3AccessPointConfiguration:
    r"""S3AccessPointConfiguration
    The configuration for an Amazon S3 access point or multi-region access point for the bucket. You can propose up to 10 access points or multi-region access points per bucket. If the proposed Amazon S3 access point configuration is for an existing bucket, the access preview uses the proposed access point configuration in place of the existing access points. To propose an access point without a policy, you can provide an empty string as the access point policy. For more information, see <a href=\"https://docs.aws.amazon.com/https:/docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html\">Creating access points</a>. For more information about access point policy limits, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points-restrictions-limitations.html\">Access points restrictions and limitations</a>.
    """
    
    access_point_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPointPolicy') }})
    network_origin: Optional[NetworkOriginConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkOrigin') }})
    public_access_block: Optional[S3PublicAccessBlockConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicAccessBlock') }})
    
