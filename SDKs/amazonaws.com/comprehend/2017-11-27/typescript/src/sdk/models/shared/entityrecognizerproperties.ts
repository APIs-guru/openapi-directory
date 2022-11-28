import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityRecognizerInputDataConfig } from "./entityrecognizerinputdataconfig";
import { LanguageCodeEnum } from "./languagecodeenum";
import { EntityRecognizerMetadata } from "./entityrecognizermetadata";
import { ModelStatusEnum } from "./modelstatusenum";
import { VpcConfig } from "./vpcconfig";



// EntityRecognizerProperties
/** 
 * Describes information about an entity recognizer.
**/
export class EntityRecognizerProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=EntityRecognizerArn" })
  entityRecognizerArn?: string;

  @SpeakeasyMetadata({ data: "json, name=InputDataConfig" })
  inputDataConfig?: EntityRecognizerInputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelKmsKeyId" })
  modelKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=RecognizerMetadata" })
  recognizerMetadata?: EntityRecognizerMetadata;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ModelStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=SubmitTime" })
  submitTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TrainingEndTime" })
  trainingEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TrainingStartTime" })
  trainingStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=VolumeKmsKeyId" })
  volumeKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}
