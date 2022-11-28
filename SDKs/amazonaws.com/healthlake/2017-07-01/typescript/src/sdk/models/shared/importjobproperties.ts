import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputDataConfig } from "./inputdataconfig";
import { OutputDataConfig } from "./outputdataconfig";
import { JobStatusEnum } from "./jobstatusenum";



// ImportJobProperties
/** 
 * Displays the properties of the import job, including the ID, Arn, Name, and the status of the Data Store.
**/
export class ImportJobProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DatastoreId" })
  datastoreId: string;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=InputDataConfig" })
  inputDataConfig: InputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=JobOutputDataConfig" })
  jobOutputDataConfig?: OutputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=JobStatus" })
  jobStatus: JobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=SubmitTime" })
  submitTime: Date;
}
