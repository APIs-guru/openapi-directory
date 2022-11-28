import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserImportJobType } from "./userimportjobtype";



// StartUserImportJobResponse
/** 
 * Represents the response from the server to the request to start the user import job.
**/
export class StartUserImportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserImportJob" })
  userImportJob?: UserImportJobType;
}
