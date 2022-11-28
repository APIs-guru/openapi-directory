from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VpcConfiguration:
    r"""VpcConfiguration
    The proposed virtual private cloud (VPC) configuration for the Amazon S3 access point. VPC configuration does not apply to multi-region access points. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_VpcConfiguration.html\">VpcConfiguration</a>. 
    """
    
    vpc_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcId') }})
    
