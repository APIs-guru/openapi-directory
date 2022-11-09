import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InputDataConfig } from "./inputdataconfig";
import { OutputDataConfig } from "./outputdataconfig";
import { JobStatusEnum } from "./jobstatusenum";


// ImportJobProperties
/** 
 * Displays the properties of the import job, including the ID, Arn, Name, and the status of the Data Store.
**/
export class ImportJobProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn?: string;

  @Metadata({ data: "json, name=DatastoreId" })
  datastoreId: string;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=InputDataConfig" })
  inputDataConfig: InputDataConfig;

  @Metadata({ data: "json, name=JobId" })
  jobId: string;

  @Metadata({ data: "json, name=JobName" })
  jobName?: string;

  @Metadata({ data: "json, name=JobOutputDataConfig" })
  jobOutputDataConfig?: OutputDataConfig;

  @Metadata({ data: "json, name=JobStatus" })
  jobStatus: JobStatusEnum;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=SubmitTime" })
  submitTime: Date;
}
