import { SpeakeasyBase } from "../../../internal/utils";
import { LocalDeviceResourceData } from "./localdeviceresourcedata";
import { LocalVolumeResourceData } from "./localvolumeresourcedata";
import { S3MachineLearningModelResourceData } from "./s3machinelearningmodelresourcedata";
import { SageMakerMachineLearningModelResourceData } from "./sagemakermachinelearningmodelresourcedata";
import { SecretsManagerSecretResourceData } from "./secretsmanagersecretresourcedata";
/**
 * A container for resource data. The container takes only one of the following supported resource data types: ''LocalDeviceResourceData'', ''LocalVolumeResourceData'', ''SageMakerMachineLearningModelResourceData'', ''S3MachineLearningModelResourceData'', ''SecretsManagerSecretResourceData''.
**/
export declare class ResourceDataContainer extends SpeakeasyBase {
    localDeviceResourceData?: LocalDeviceResourceData;
    localVolumeResourceData?: LocalVolumeResourceData;
    s3MachineLearningModelResourceData?: S3MachineLearningModelResourceData;
    sageMakerMachineLearningModelResourceData?: SageMakerMachineLearningModelResourceData;
    secretsManagerSecretResourceData?: SecretsManagerSecretResourceData;
}
