import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserImportJobType } from "./userimportjobtype";


// CreateUserImportJobResponse
/** 
 * Represents the response from the server to the request to create the user import job.
**/
export class CreateUserImportJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserImportJob" })
  userImportJob?: UserImportJobType;
}
