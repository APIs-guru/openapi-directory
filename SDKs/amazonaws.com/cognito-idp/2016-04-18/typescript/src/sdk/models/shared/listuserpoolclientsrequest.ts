import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListUserPoolClientsRequest
/** 
 * Represents the request to list the user pool clients.
**/
export class ListUserPoolClientsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
