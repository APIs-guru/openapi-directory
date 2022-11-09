import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=LocalDeviceResourceData" })
  localDeviceResourceData?: LocalDeviceResourceData;

  @Metadata({ data: "json, name=LocalVolumeResourceData" })
  localVolumeResourceData?: LocalVolumeResourceData;

  @Metadata({ data: "json, name=S3MachineLearningModelResourceData" })
  s3MachineLearningModelResourceData?: S3MachineLearningModelResourceData;

  @Metadata({ data: "json, name=SageMakerMachineLearningModelResourceData" })
  sageMakerMachineLearningModelResourceData?: SageMakerMachineLearningModelResourceData;

  @Metadata({ data: "json, name=SecretsManagerSecretResourceData" })
  secretsManagerSecretResourceData?: SecretsManagerSecretResourceData;
}
