import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListUserImportJobsRequest
/** 
 * Represents the request to list the user import jobs.
**/
export class ListUserImportJobsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults: number;

  @Metadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
