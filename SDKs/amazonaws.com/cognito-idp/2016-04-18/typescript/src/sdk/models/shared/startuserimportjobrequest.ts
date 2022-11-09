import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StartUserImportJobRequest
/** 
 * Represents the request to start the user import job.
**/
export class StartUserImportJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId: string;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
