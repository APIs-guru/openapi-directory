import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StopUserImportJobRequest
/** 
 * Represents the request to stop the user import job.
**/
export class StopUserImportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
