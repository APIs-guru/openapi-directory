from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import mluserdataencryption


@dataclass_json
@dataclass
class TransformEncryption:
    ml_user_data_encryption: Optional[mluserdataencryption.MlUserDataEncryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MlUserDataEncryption' }})
    task_run_security_configuration_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskRunSecurityConfigurationName' }})
    
