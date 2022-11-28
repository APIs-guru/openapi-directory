import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputDataConfig } from "./inputdataconfig";
import { JobStatusEnum } from "./jobstatusenum";
import { OutputDataConfig } from "./outputdataconfig";
import { VpcConfig } from "./vpcconfig";



// DocumentClassificationJobProperties
/** 
 * Provides information about a document classification job.
**/
export class DocumentClassificationJobProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DocumentClassifierArn" })
  documentClassifierArn?: string;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=InputDataConfig" })
  inputDataConfig?: InputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=JobArn" })
  jobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=JobStatus" })
  jobStatus?: JobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig?: OutputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=SubmitTime" })
  submitTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=VolumeKmsKeyId" })
  volumeKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}
