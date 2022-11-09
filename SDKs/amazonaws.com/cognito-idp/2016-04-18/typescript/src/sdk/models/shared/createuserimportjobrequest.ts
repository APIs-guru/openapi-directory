import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateUserImportJobRequest
/** 
 * Represents the request to create the user import job.
**/
export class CreateUserImportJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchLogsRoleArn" })
  cloudWatchLogsRoleArn: string;

  @Metadata({ data: "json, name=JobName" })
  jobName: string;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
