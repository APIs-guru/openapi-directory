import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserImportJobType } from "./userimportjobtype";



// ListUserImportJobsResponse
/** 
 * Represents the response from the server to the request to list the user import jobs.
**/
export class ListUserImportJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;

  @SpeakeasyMetadata({ data: "json, name=UserImportJobs", elemType: UserImportJobType })
  userImportJobs?: UserImportJobType[];
}
