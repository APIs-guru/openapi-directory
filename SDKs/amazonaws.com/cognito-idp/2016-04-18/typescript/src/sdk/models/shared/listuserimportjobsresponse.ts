import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserImportJobType } from "./userimportjobtype";


// ListUserImportJobsResponse
/** 
 * Represents the response from the server to the request to list the user import jobs.
**/
export class ListUserImportJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;

  @Metadata({ data: "json, name=UserImportJobs", elemType: shared.UserImportJobType })
  userImportJobs?: UserImportJobType[];
}
