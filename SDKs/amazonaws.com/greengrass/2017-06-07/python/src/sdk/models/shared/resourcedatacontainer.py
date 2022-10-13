from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import localdeviceresourcedata
from . import localvolumeresourcedata
from . import s3machinelearningmodelresourcedata
from . import sagemakermachinelearningmodelresourcedata
from . import secretsmanagersecretresourcedata


@dataclass_json
@dataclass
class ResourceDataContainer:
    local_device_resource_data: Optional[localdeviceresourcedata.LocalDeviceResourceData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalDeviceResourceData' }})
    local_volume_resource_data: Optional[localvolumeresourcedata.LocalVolumeResourceData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalVolumeResourceData' }})
    s3_machine_learning_model_resource_data: Optional[s3machinelearningmodelresourcedata.S3MachineLearningModelResourceData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3MachineLearningModelResourceData' }})
    sage_maker_machine_learning_model_resource_data: Optional[sagemakermachinelearningmodelresourcedata.SageMakerMachineLearningModelResourceData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SageMakerMachineLearningModelResourceData' }})
    secrets_manager_secret_resource_data: Optional[secretsmanagersecretresourcedata.SecretsManagerSecretResourceData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretsManagerSecretResourceData' }})
    
