import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobStatusEnum } from "./jobstatusenum";
import { OutputDataConfig } from "./outputdataconfig";


// ExportJobProperties
/** 
 * The properties of a FHIR export job, including the ID, ARN, name, and the status of the job.
**/
export class ExportJobProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn?: string;

  @Metadata({ data: "json, name=DatastoreId" })
  datastoreId: string;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=JobId" })
  jobId: string;

  @Metadata({ data: "json, name=JobName" })
  jobName?: string;

  @Metadata({ data: "json, name=JobStatus" })
  jobStatus: JobStatusEnum;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig: OutputDataConfig;

  @Metadata({ data: "json, name=SubmitTime" })
  submitTime: Date;
}
