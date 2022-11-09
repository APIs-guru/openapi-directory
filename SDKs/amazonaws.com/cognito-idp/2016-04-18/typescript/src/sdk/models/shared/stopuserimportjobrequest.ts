import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StopUserImportJobRequest
/** 
 * Represents the request to stop the user import job.
**/
export class StopUserImportJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId: string;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
