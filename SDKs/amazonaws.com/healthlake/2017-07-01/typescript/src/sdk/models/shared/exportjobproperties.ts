import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
import { OutputDataConfig } from "./outputdataconfig";



// ExportJobProperties
/** 
 * The properties of a FHIR export job, including the ID, ARN, name, and the status of the job.
**/
export class ExportJobProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DatastoreId" })
  datastoreId: string;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=JobStatus" })
  jobStatus: JobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig: OutputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=SubmitTime" })
  submitTime: Date;
}
