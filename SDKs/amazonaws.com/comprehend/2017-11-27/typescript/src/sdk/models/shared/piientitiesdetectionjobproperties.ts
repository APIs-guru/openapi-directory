import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InputDataConfig } from "./inputdataconfig";
import { JobStatusEnum } from "./jobstatusenum";
import { LanguageCodeEnum } from "./languagecodeenum";
import { PiiEntitiesDetectionModeEnum } from "./piientitiesdetectionmodeenum";
import { PiiOutputDataConfig } from "./piioutputdataconfig";
import { RedactionConfig } from "./redactionconfig";


// PiiEntitiesDetectionJobProperties
/** 
 * Provides information about a PII entities detection job.
**/
export class PiiEntitiesDetectionJobProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn?: string;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=InputDataConfig" })
  inputDataConfig?: InputDataConfig;

  @Metadata({ data: "json, name=JobArn" })
  jobArn?: string;

  @Metadata({ data: "json, name=JobId" })
  jobId?: string;

  @Metadata({ data: "json, name=JobName" })
  jobName?: string;

  @Metadata({ data: "json, name=JobStatus" })
  jobStatus?: JobStatusEnum;

  @Metadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=Mode" })
  mode?: PiiEntitiesDetectionModeEnum;

  @Metadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig?: PiiOutputDataConfig;

  @Metadata({ data: "json, name=RedactionConfig" })
  redactionConfig?: RedactionConfig;

  @Metadata({ data: "json, name=SubmitTime" })
  submitTime?: Date;
}
