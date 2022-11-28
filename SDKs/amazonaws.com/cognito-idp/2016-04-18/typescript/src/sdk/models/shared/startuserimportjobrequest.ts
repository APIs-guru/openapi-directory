import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StartUserImportJobRequest
/** 
 * Represents the request to start the user import job.
**/
export class StartUserImportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
