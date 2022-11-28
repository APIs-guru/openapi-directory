import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserImportJobType } from "./userimportjobtype";



// StopUserImportJobResponse
/** 
 * Represents the response from the server to the request to stop the user import job.
**/
export class StopUserImportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserImportJob" })
  userImportJob?: UserImportJobType;
}
