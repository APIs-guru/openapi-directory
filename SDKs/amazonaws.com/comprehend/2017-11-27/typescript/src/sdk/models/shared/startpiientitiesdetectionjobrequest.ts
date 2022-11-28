import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputDataConfig } from "./inputdataconfig";
import { LanguageCodeEnum } from "./languagecodeenum";
import { PiiEntitiesDetectionModeEnum } from "./piientitiesdetectionmodeenum";
import { OutputDataConfig } from "./outputdataconfig";
import { RedactionConfig } from "./redactionconfig";
import { Tag } from "./tag";



export class StartPiiEntitiesDetectionJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=InputDataConfig" })
  inputDataConfig: InputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode: LanguageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Mode" })
  mode: PiiEntitiesDetectionModeEnum;

  @SpeakeasyMetadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig: OutputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=RedactionConfig" })
  redactionConfig?: RedactionConfig;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
