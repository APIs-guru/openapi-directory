from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NetworkOriginConfiguration:
    r"""NetworkOriginConfiguration
    The proposed <code>InternetConfiguration</code> or <code>VpcConfiguration</code> to apply to the Amazon S3 access point. <code>VpcConfiguration</code> does not apply to multi-region access points. You can make the access point accessible from the internet, or you can specify that all requests made through that access point must originate from a specific virtual private cloud (VPC). You can specify only one type of network configuration. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html\">Creating access points</a>.
    """
    
    internet_configuration: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internetConfiguration') }})
    vpc_configuration: Optional[VpcConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConfiguration') }})
    
