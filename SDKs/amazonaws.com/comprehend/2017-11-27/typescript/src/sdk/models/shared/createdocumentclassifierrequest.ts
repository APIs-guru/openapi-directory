import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DocumentClassifierInputDataConfig } from "./documentclassifierinputdataconfig";
import { LanguageCodeEnum } from "./languagecodeenum";
import { DocumentClassifierModeEnum } from "./documentclassifiermodeenum";
import { DocumentClassifierOutputDataConfig } from "./documentclassifieroutputdataconfig";
import { Tag } from "./tag";
import { VpcConfig } from "./vpcconfig";


export class CreateDocumentClassifierRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn: string;

  @Metadata({ data: "json, name=DocumentClassifierName" })
  documentClassifierName: string;

  @Metadata({ data: "json, name=InputDataConfig" })
  inputDataConfig: DocumentClassifierInputDataConfig;

  @Metadata({ data: "json, name=LanguageCode" })
  languageCode: LanguageCodeEnum;

  @Metadata({ data: "json, name=Mode" })
  mode?: DocumentClassifierModeEnum;

  @Metadata({ data: "json, name=ModelKmsKeyId" })
  modelKmsKeyId?: string;

  @Metadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig?: DocumentClassifierOutputDataConfig;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=VolumeKmsKeyId" })
  volumeKmsKeyId?: string;

  @Metadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}
