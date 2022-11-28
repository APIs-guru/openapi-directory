import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityRecognizerInputDataConfig } from "./entityrecognizerinputdataconfig";
import { LanguageCodeEnum } from "./languagecodeenum";
import { Tag } from "./tag";
import { VpcConfig } from "./vpcconfig";



export class CreateEntityRecognizerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=InputDataConfig" })
  inputDataConfig: EntityRecognizerInputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode: LanguageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=ModelKmsKeyId" })
  modelKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=RecognizerName" })
  recognizerName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=VolumeKmsKeyId" })
  volumeKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}
