import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalDeviceResourceData } from "./localdeviceresourcedata";
import { LocalVolumeResourceData } from "./localvolumeresourcedata";
import { S3MachineLearningModelResourceData } from "./s3machinelearningmodelresourcedata";
import { SageMakerMachineLearningModelResourceData } from "./sagemakermachinelearningmodelresourcedata";
import { SecretsManagerSecretResourceData } from "./secretsmanagersecretresourcedata";



// ResourceDataContainer
/** 
 * A container for resource data. The container takes only one of the following supported resource data types: ''LocalDeviceResourceData'', ''LocalVolumeResourceData'', ''SageMakerMachineLearningModelResourceData'', ''S3MachineLearningModelResourceData'', ''SecretsManagerSecretResourceData''.
**/
export class ResourceDataContainer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LocalDeviceResourceData" })
  localDeviceResourceData?: LocalDeviceResourceData;

  @SpeakeasyMetadata({ data: "json, name=LocalVolumeResourceData" })
  localVolumeResourceData?: LocalVolumeResourceData;

  @SpeakeasyMetadata({ data: "json, name=S3MachineLearningModelResourceData" })
  s3MachineLearningModelResourceData?: S3MachineLearningModelResourceData;

  @SpeakeasyMetadata({ data: "json, name=SageMakerMachineLearningModelResourceData" })
  sageMakerMachineLearningModelResourceData?: SageMakerMachineLearningModelResourceData;

  @SpeakeasyMetadata({ data: "json, name=SecretsManagerSecretResourceData" })
  secretsManagerSecretResourceData?: SecretsManagerSecretResourceData;
}
