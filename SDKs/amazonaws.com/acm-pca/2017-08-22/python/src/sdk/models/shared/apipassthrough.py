from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class APIPassthrough:
    r"""APIPassthrough
    <p>Contains X.509 certificate information to be placed in an issued certificate. An <code>APIPassthrough</code> or <code>APICSRPassthrough</code> template variant must be selected, or else this parameter is ignored. </p> <p>If conflicting or duplicate certificate information is supplied from other sources, ACM Private CA applies <a href=\"https://docs.aws.amazon.com/acm-pca/latest/userguide/UsingTemplates.html#template-order-of-operations\">order of operation rules</a> to determine what information is used.</p>
    """
    
    extensions: Optional[Extensions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Extensions') }})
    subject: Optional[Asn1Subject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subject') }})
    
