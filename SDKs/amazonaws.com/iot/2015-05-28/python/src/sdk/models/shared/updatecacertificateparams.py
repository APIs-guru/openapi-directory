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
class UpdateCaCertificateParams:
    r"""UpdateCaCertificateParams
    Parameters to define a mitigation action that changes the state of the CA certificate to inactive.
    """
    
    action: CaCertificateUpdateActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    
