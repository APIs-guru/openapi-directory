import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserImportJobType } from "./userimportjobtype";


// StopUserImportJobResponse
/** 
 * Represents the response from the server to the request to stop the user import job.
**/
export class StopUserImportJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserImportJob" })
  userImportJob?: UserImportJobType;
}
