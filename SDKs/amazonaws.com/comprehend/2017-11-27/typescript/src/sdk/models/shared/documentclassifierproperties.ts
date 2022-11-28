import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClassifierMetadata } from "./classifiermetadata";
import { DocumentClassifierInputDataConfig } from "./documentclassifierinputdataconfig";
import { LanguageCodeEnum } from "./languagecodeenum";
import { DocumentClassifierModeEnum } from "./documentclassifiermodeenum";
import { DocumentClassifierOutputDataConfig } from "./documentclassifieroutputdataconfig";
import { ModelStatusEnum } from "./modelstatusenum";
import { VpcConfig } from "./vpcconfig";



// DocumentClassifierProperties
/** 
 * Provides information about a document classifier.
**/
export class DocumentClassifierProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClassifierMetadata" })
  classifierMetadata?: ClassifierMetadata;

  @SpeakeasyMetadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DocumentClassifierArn" })
  documentClassifierArn?: string;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=InputDataConfig" })
  inputDataConfig?: DocumentClassifierInputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=Mode" })
  mode?: DocumentClassifierModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ModelKmsKeyId" })
  modelKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig?: DocumentClassifierOutputDataConfig;

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
