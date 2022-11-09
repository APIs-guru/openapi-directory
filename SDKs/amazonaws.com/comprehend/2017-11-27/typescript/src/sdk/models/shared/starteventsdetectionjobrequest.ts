import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InputDataConfig } from "./inputdataconfig";
import { LanguageCodeEnum } from "./languagecodeenum";
import { OutputDataConfig } from "./outputdataconfig";
import { Tag } from "./tag";


export class StartEventsDetectionJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn: string;

  @Metadata({ data: "json, name=InputDataConfig" })
  inputDataConfig: InputDataConfig;

  @Metadata({ data: "json, name=JobName" })
  jobName?: string;

  @Metadata({ data: "json, name=LanguageCode" })
  languageCode: LanguageCodeEnum;

  @Metadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig: OutputDataConfig;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=TargetEventTypes" })
  targetEventTypes: string[];
}
