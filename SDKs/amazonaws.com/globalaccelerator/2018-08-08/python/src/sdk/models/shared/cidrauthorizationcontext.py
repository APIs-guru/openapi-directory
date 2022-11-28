from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CidrAuthorizationContext:
    r"""CidrAuthorizationContext
    <p>Provides authorization for Amazon to bring a specific IP address range to a specific AWS account using bring your own IP addresses (BYOIP). </p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html\">Bring Your Own IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
    """
    
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    signature: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Signature') }})
    
