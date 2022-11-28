import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputDataConfig } from "./inputdataconfig";
import { JobStatusEnum } from "./jobstatusenum";
import { LanguageCodeEnum } from "./languagecodeenum";
import { OutputDataConfig } from "./outputdataconfig";



// ComprehendMedicalAsyncJobProperties
/** 
 * Provides information about a detection job.
**/
export class ComprehendMedicalAsyncJobProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ExpirationTime" })
  expirationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=InputDataConfig" })
  inputDataConfig?: InputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=JobStatus" })
  jobStatus?: JobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=KMSKey" })
  kmsKey?: string;

  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=ManifestFilePath" })
  manifestFilePath?: string;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelVersion" })
  modelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig?: OutputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=SubmitTime" })
  submitTime?: Date;
}
