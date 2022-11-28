from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Validity:
    r"""Validity
    <p>Validity specifies the period of time during which a certificate is valid. Validity can be expressed as an explicit date and time when the validity of a certificate starts or expires, or as a span of time after issuance, stated in days, months, or years. For more information, see <a href=\"https://tools.ietf.org/html/rfc5280#section-4.1.2.5\">Validity</a> in RFC 5280.</p> <p>ACM Private CA API consumes the <code>Validity</code> data type differently in two distinct parameters of the <code>IssueCertificate</code> action. The required parameter <code>IssueCertificate</code>:<code>Validity</code> specifies the end of a certificate's validity period. The optional parameter <code>IssueCertificate</code>:<code>ValidityNotBefore</code> specifies a customized starting time for the validity period.</p>
    """
    
    type: ValidityPeriodTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    value: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
