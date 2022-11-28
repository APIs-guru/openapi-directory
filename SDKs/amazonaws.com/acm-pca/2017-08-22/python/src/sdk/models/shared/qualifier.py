from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Qualifier:
    r"""Qualifier
    Defines a <code>PolicyInformation</code> qualifier. ACM Private CA supports the <a href=\"https://tools.ietf.org/html/rfc5280#section-4.2.1.4\">certification practice statement (CPS) qualifier</a> defined in RFC 5280. 
    """
    
    cps_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CpsUri') }})
    
