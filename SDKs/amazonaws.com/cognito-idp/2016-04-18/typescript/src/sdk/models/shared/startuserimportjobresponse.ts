import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserImportJobType } from "./userimportjobtype";


// StartUserImportJobResponse
/** 
 * Represents the response from the server to the request to start the user import job.
**/
export class StartUserImportJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserImportJob" })
  userImportJob?: UserImportJobType;
}
