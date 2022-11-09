import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InputDataConfig } from "./inputdataconfig";
import { JobStatusEnum } from "./jobstatusenum";
import { LanguageCodeEnum } from "./languagecodeenum";
import { OutputDataConfig } from "./outputdataconfig";


// ComprehendMedicalAsyncJobProperties
/** 
 * Provides information about a detection job.
**/
export class ComprehendMedicalAsyncJobProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn?: string;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=ExpirationTime" })
  expirationTime?: Date;

  @Metadata({ data: "json, name=InputDataConfig" })
  inputDataConfig?: InputDataConfig;

  @Metadata({ data: "json, name=JobId" })
  jobId?: string;

  @Metadata({ data: "json, name=JobName" })
  jobName?: string;

  @Metadata({ data: "json, name=JobStatus" })
  jobStatus?: JobStatusEnum;

  @Metadata({ data: "json, name=KMSKey" })
  kmsKey?: string;

  @Metadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @Metadata({ data: "json, name=ManifestFilePath" })
  manifestFilePath?: string;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=ModelVersion" })
  modelVersion?: string;

  @Metadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig?: OutputDataConfig;

  @Metadata({ data: "json, name=SubmitTime" })
  submitTime?: Date;
}
