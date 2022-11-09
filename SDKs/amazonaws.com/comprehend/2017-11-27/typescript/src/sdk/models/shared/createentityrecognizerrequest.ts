import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntityRecognizerInputDataConfig } from "./entityrecognizerinputdataconfig";
import { LanguageCodeEnum } from "./languagecodeenum";
import { Tag } from "./tag";
import { VpcConfig } from "./vpcconfig";


export class CreateEntityRecognizerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn: string;

  @Metadata({ data: "json, name=InputDataConfig" })
  inputDataConfig: EntityRecognizerInputDataConfig;

  @Metadata({ data: "json, name=LanguageCode" })
  languageCode: LanguageCodeEnum;

  @Metadata({ data: "json, name=ModelKmsKeyId" })
  modelKmsKeyId?: string;

  @Metadata({ data: "json, name=RecognizerName" })
  recognizerName: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=VolumeKmsKeyId" })
  volumeKmsKeyId?: string;

  @Metadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}
