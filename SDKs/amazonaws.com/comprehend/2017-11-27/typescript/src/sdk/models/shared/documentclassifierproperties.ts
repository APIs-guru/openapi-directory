import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=ClassifierMetadata" })
  classifierMetadata?: ClassifierMetadata;

  @Metadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn?: string;

  @Metadata({ data: "json, name=DocumentClassifierArn" })
  documentClassifierArn?: string;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=InputDataConfig" })
  inputDataConfig?: DocumentClassifierInputDataConfig;

  @Metadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=Mode" })
  mode?: DocumentClassifierModeEnum;

  @Metadata({ data: "json, name=ModelKmsKeyId" })
  modelKmsKeyId?: string;

  @Metadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig?: DocumentClassifierOutputDataConfig;

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
