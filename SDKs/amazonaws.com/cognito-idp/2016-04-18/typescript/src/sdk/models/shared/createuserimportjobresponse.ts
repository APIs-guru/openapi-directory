import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserImportJobType } from "./userimportjobtype";



// CreateUserImportJobResponse
/** 
 * Represents the response from the server to the request to create the user import job.
**/
export class CreateUserImportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserImportJob" })
  userImportJob?: UserImportJobType;
}
