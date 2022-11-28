from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MitigationActionParams:
    r"""MitigationActionParams
    The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
    """
    
    add_things_to_thing_group_params: Optional[AddThingsToThingGroupParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addThingsToThingGroupParams') }})
    enable_io_t_logging_params: Optional[EnableIoTLoggingParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableIoTLoggingParams') }})
    publish_finding_to_sns_params: Optional[PublishFindingToSnsParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishFindingToSnsParams') }})
    replace_default_policy_version_params: Optional[ReplaceDefaultPolicyVersionParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceDefaultPolicyVersionParams') }})
    update_ca_certificate_params: Optional[UpdateCaCertificateParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateCACertificateParams') }})
    update_device_certificate_params: Optional[UpdateDeviceCertificateParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateDeviceCertificateParams') }})
    
