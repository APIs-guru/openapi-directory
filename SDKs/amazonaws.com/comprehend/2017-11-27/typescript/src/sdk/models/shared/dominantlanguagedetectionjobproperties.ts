import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InputDataConfig } from "./inputdataconfig";
import { JobStatusEnum } from "./jobstatusenum";
import { OutputDataConfig } from "./outputdataconfig";
import { VpcConfig } from "./vpcconfig";


// DominantLanguageDetectionJobProperties
/** 
 * Provides information about a dominant language detection job.
**/
export class DominantLanguageDetectionJobProperties extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig?: OutputDataConfig;

  @Metadata({ data: "json, name=SubmitTime" })
  submitTime?: Date;

  @Metadata({ data: "json, name=VolumeKmsKeyId" })
  volumeKmsKeyId?: string;

  @Metadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}
