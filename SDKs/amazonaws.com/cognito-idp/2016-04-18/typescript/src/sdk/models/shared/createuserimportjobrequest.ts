import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateUserImportJobRequest
/** 
 * Represents the request to create the user import job.
**/
export class CreateUserImportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchLogsRoleArn" })
  cloudWatchLogsRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
