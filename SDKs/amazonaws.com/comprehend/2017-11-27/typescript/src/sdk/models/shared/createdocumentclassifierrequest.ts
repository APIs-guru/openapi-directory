import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentClassifierInputDataConfig } from "./documentclassifierinputdataconfig";
import { LanguageCodeEnum } from "./languagecodeenum";
import { DocumentClassifierModeEnum } from "./documentclassifiermodeenum";
import { DocumentClassifierOutputDataConfig } from "./documentclassifieroutputdataconfig";
import { Tag } from "./tag";
import { VpcConfig } from "./vpcconfig";



export class CreateDocumentClassifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=DocumentClassifierName" })
  documentClassifierName: string;

  @SpeakeasyMetadata({ data: "json, name=InputDataConfig" })
  inputDataConfig: DocumentClassifierInputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode: LanguageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Mode" })
  mode?: DocumentClassifierModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ModelKmsKeyId" })
  modelKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig?: DocumentClassifierOutputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=VolumeKmsKeyId" })
  volumeKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}
