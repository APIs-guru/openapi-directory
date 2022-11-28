from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceDataContainer:
    r"""ResourceDataContainer
    A container for resource data. The container takes only one of the following supported resource data types: ''LocalDeviceResourceData'', ''LocalVolumeResourceData'', ''SageMakerMachineLearningModelResourceData'', ''S3MachineLearningModelResourceData'', ''SecretsManagerSecretResourceData''.
    """
    
    local_device_resource_data: Optional[LocalDeviceResourceData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalDeviceResourceData') }})
    local_volume_resource_data: Optional[LocalVolumeResourceData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalVolumeResourceData') }})
    s3_machine_learning_model_resource_data: Optional[S3MachineLearningModelResourceData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3MachineLearningModelResourceData') }})
    sage_maker_machine_learning_model_resource_data: Optional[SageMakerMachineLearningModelResourceData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SageMakerMachineLearningModelResourceData') }})
    secrets_manager_secret_resource_data: Optional[SecretsManagerSecretResourceData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretsManagerSecretResourceData') }})
    
