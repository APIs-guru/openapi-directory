import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn?: string;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=EntityRecognizerArn" })
  entityRecognizerArn?: string;

  @Metadata({ data: "json, name=InputDataConfig" })
  inputDataConfig?: EntityRecognizerInputDataConfig;

  @Metadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=ModelKmsKeyId" })
  modelKmsKeyId?: string;

  @Metadata({ data: "json, name=RecognizerMetadata" })
  recognizerMetadata?: EntityRecognizerMetadata;

  @Metadata({ data: "json, name=Status" })
  status?: ModelStatusEnum;

  @Metadata({ data: "json, name=SubmitTime" })
  submitTime?: Date;

  @Metadata({ data: "json, name=TrainingEndTime" })
  trainingEndTime?: Date;

  @Metadata({ data: "json, name=TrainingStartTime" })
  trainingStartTime?: Date;

  @Metadata({ data: "json, name=VolumeKmsKeyId" })
  volumeKmsKeyId?: string;

  @Metadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}
