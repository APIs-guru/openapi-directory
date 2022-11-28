import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListUserImportJobsRequest
/** 
 * Represents the request to list the user import jobs.
**/
export class ListUserImportJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults: number;

  @SpeakeasyMetadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
