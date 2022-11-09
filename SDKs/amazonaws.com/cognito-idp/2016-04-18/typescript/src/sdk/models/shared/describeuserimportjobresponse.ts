import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserImportJobType } from "./userimportjobtype";


// DescribeUserImportJobResponse
/** 
 * Represents the response from the server to the request to describe the user import job.
**/
export class DescribeUserImportJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserImportJob" })
  userImportJob?: UserImportJobType;
}
