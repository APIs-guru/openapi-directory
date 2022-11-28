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
class UpdateDeviceCertificateParams:
    r"""UpdateDeviceCertificateParams
    Parameters to define a mitigation action that changes the state of the device certificate to inactive.
    """
    
    action: DeviceCertificateUpdateActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    
