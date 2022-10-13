from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import addthingstothinggroupparams
from . import enableiotloggingparams
from . import publishfindingtosnsparams
from . import replacedefaultpolicyversionparams
from . import updatecacertificateparams
from . import updatedevicecertificateparams


@dataclass_json
@dataclass
class MitigationActionParams:
    add_things_to_thing_group_params: Optional[addthingstothinggroupparams.AddThingsToThingGroupParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addThingsToThingGroupParams' }})
    enable_io_t_logging_params: Optional[enableiotloggingparams.EnableIoTLoggingParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableIoTLoggingParams' }})
    publish_finding_to_sns_params: Optional[publishfindingtosnsparams.PublishFindingToSnsParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishFindingToSnsParams' }})
    replace_default_policy_version_params: Optional[replacedefaultpolicyversionparams.ReplaceDefaultPolicyVersionParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replaceDefaultPolicyVersionParams' }})
    update_ca_certificate_params: Optional[updatecacertificateparams.UpdateCaCertificateParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateCACertificateParams' }})
    update_device_certificate_params: Optional[updatedevicecertificateparams.UpdateDeviceCertificateParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateDeviceCertificateParams' }})
    
